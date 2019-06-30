import { Injectable, Inject } from '@nestjs/common';
import { Pessoa, statusEnum } from '../model/pessoa.entity';
import { Cep } from '../model/cep.entity';
import { CepService } from './cep.service';
import { EstadoService } from './estado.service';
import { MunicipioService } from './municipio.service';
import { BairroService } from './bairro.service';
import { AutenticacaoService } from './autenticacao.service';

@Injectable()
export class PessoaService {
  async readAll(params): Promise<Pessoa[] | any> {
    return Pessoa.find({
      join: {
        alias: 'pessoa',
        leftJoinAndSelect: {
          cep: 'pessoa.cep',
          bairro: 'cep.bairro',
          municipio: 'bairro.municipio',
          estado: 'municipio.estado',
        },
      },
      where: this.getWhere(params),
      skip: params.pag * 10,
      take: 10,
    });
  }

  getWhere(query) {
    const keysPermitidas = ['status', 'bairro', 'municipio', 'estado'];
    let where = '';
    Object.keys(query)
      .filter(key => keysPermitidas.indexOf(key) !== -1)
      .forEach(key => {
        if (Array.isArray(query[key])) {
          where += '( ';
          query[key].forEach(element => {
            where += `${key}.nome ILIKE '%${element}%' or `;
          });
          where = where.substr(0, where.length - 3);
          where += ') and ';
        } else {
          if (key == 'status') {
            where += `pessoa.status = '${query[key]}' and `;
          } else {
            where += `${key}.nome ILIKE '%${query[key]}%' and `;
          }
        }
      });
    return where.substr(0, where.length - 4);
  }
  async readOne(cpf: number) {
    return await Pessoa.findOne({ idpessoa: cpf });
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
    let error = '{"message":"Favor inserir um cpf"}';
    try {
      await estadoservice.Create(body);
      await municipioservice.Create(body);
      await bairroservice.Create(body);
      await cepservice.Create(body);

      busca = await this.readOne(body.cpf);
      if (busca != undefined) {
        return this.Update(body, busca);
      } else {
        if (body.cpf.length != 0) {
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
          await authservice.Create(body);
          return pessoa;
        } else {
          return JSON.parse(error);
        }
      }
    } catch (err) {
      throw new Error(
        `Erro ao cadastrar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Pessoa> {
    let busca = new Pessoa();
    try {
      busca = await Pessoa.findOne({
        idpessoa: body.idpessoa,
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
      busca.status = body.status;
      busca.urlimagem = body.urlimagem;
      await Pessoa.save(busca);
      await authservice.Create(body);
      return busca;
    } catch (err) {
      throw new Error(
        `Erro ao atualizar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
