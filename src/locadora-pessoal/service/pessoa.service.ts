import { Injectable, Inject } from '@nestjs/common';
import { Pessoa, statusEnum } from '../model/pessoa.entity';
import { genericInterface } from './interface/generic.interface';
import { Cep } from '../model/cep.entity';
import { CepService } from './cep.service';
import { EstadoService } from './estado.service';
import { MunicipioService } from './municipio.service';
import { BairroService } from './bairro.service';
import { AutenticacaoService } from './autenticacao.service';

@Injectable()
export class PessoaService {
  async readAll(): Promise<Pessoa[] | any> {
    return Pessoa.find();
  }

  async readOne(cpf: string) {
    return await Pessoa.findOne({ cpf: cpf });
  }

  async Create(body: any): Promise<Pessoa | any> {
    let pessoa = new Pessoa();
    let cepservice = new CepService();
    let estadoservice = new EstadoService();
    let municipioservice = new MunicipioService();
    let bairroservice = new BairroService();
    let authservice = new AutenticacaoService();
    let busca = new Pessoa();
    let cep = new Cep();
    try {
      await estadoservice.Create(body);
      await municipioservice.Create(body);
      await bairroservice.Create(body);
      await cepservice.Create(body);

      busca = await this.readOne(body.cpf);
      if (busca != undefined) {
        return this.Update(body, busca);
      } else {
        cep = await cepservice.readOne(body.cep.numero);
        pessoa.nome = body.nome;
        pessoa.sexo = body.sexo;
        pessoa.cpf = body.cpf;
        pessoa.cep = cep;
        pessoa.datanascimento = body.datanascimento;
        pessoa.pontuacao = 5;
        pessoa.nomeusuario = body.nomeusuario;
        pessoa.email = body.email;
        pessoa.status = 0;
        pessoa.urlimagem = body.urlimagem;
        await Pessoa.save(pessoa);
        await authservice.Create(body)
        return pessoa
      }
    } catch (err) {
      throw new Error(
        `Erro ao salvar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Pessoa> {
    let busca = new Pessoa();
    try {
      busca = await Pessoa.findOne({
        cpf: body.cpf,
      });
      busca.status = statusEnum.inativo;
      return await Pessoa.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any, busca: Pessoa): Promise<Pessoa> {
    let cepservice = new CepService();
    let cep = new Cep();
    let authservice = new AutenticacaoService();
    try {
      cep = await cepservice.readOne(body.cep.numero);
      busca.nome = body.nome;
      busca.sexo = body.sexo;
      busca.cpf = body.cpf;
      busca.cep = cep;
      busca.datanascimento = body.datanascimento;
      busca.pontuacao = 5;
      busca.nomeusuario = body.nomeusuario;
      busca.email = body.email;
      busca.status = 0;
      busca.urlimagem = body.urlimagem;
      await Pessoa.save(busca);
      await authservice.Create(body)
      return busca
    } catch (err) {
      throw new Error(
        `Erro ao atualizar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
