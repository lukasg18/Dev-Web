import { Injectable, Inject } from '@nestjs/common';
import { Atendente } from '../model/atendente.entity';
import { PessoaService } from './pessoa.service';
import { Pessoa } from '../model/pessoa.entity';

@Injectable()
export class AtendenteService {
  
  async readAll(): Promise<Atendente[] | any> {
    return Atendente.find();
  }

  async readOne(id: number): Promise<Atendente | any> {
    return Atendente.findOne({ idpessoa: id });
  }

  async Create(body: any): Promise<Atendente> {
    let atendente = new Atendente();
    let pessoaService = new PessoaService();
    let pessoa = new Pessoa();
    try {
      pessoa = await pessoaService.Create(body.pessoa);
      atendente.numeroregistro = body.numeroregistro;
      atendente.idpessoa = pessoa.idpessoa;
      return await Atendente.save(atendente);
    } catch (err) {
      throw new Error(
        `Erro ao salvar atedente\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<Atendente> {
    let busca;
    try {
      let busca = await Atendente.findOne({ numeroregistro: body.antigoregistro });
      busca.numeroregistro = body.novoregistro
      return await Atendente.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar atedente\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
