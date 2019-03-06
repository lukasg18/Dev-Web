import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from '../model/pessoa.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class PessoaService implements genericInterface<Pessoa> {
  async readAll(): Promise<Pessoa[] | any> {
    return Pessoa.find();
  }

  async readOne(id: number): Promise<Pessoa | any> {
    return Pessoa.findOne({ idpessoa: id });
  }

  async Create(body: any): Promise<Pessoa> {
    let pessoa = new Pessoa();
    try {
      pessoa.nome = body.nome;
      pessoa.sexo = body.sexo;
      pessoa.cpf = body.cpf;
      pessoa.datanascimento = body.datanascimento;
      pessoa.rg = body.rg;
      return await Pessoa.save(pessoa);
    } catch (err) {
      throw new Error(
        `Erro ao salvar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Pessoa> {
    let busca;
    try {
      busca = await Pessoa.findOne({
        cpf: body.cpf,
      });
      return await Pessoa.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<Pessoa> {
    try {
      let busca = await Pessoa.findOne({
        cpf: body.cpf,
      });
      busca.cpf = body.novoregistro;
      return await Pessoa.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
