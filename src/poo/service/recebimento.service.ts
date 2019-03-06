import { Injectable, Inject } from '@nestjs/common';
import { Recebimento } from '../model/recebimento.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class RecebimentoService implements genericInterface<Recebimento> {
  async readAll() {
    return await Recebimento.find();
  }

  async readOne(id: number) {
    return await Recebimento.findOne({ idrecebimento: id });
  }

  async Create(body: any) {
    let receb = new Recebimento();
    try {
      receb.atendente = body.idatendente;
      receb.data_hora = body.data_hora;
      receb.medicamentoPosto = body.idmedicamentoPosto;
      receb.pessoa = body.idpessoa;
      receb.quantidademedicamentos = body.quantidademedicamentos;
      return await Recebimento.save(receb);
    } catch (err) {
      throw new Error(
        `Erro ao verificar recebimento\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Recebimento> {
    let receb = new Recebimento();
    let busca;
    receb.idrecebimento = body.idrecebimento;
    try {
      busca = await Recebimento.findOne({
        idrecebimento: receb.idrecebimento,
      });
      return await Recebimento.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao tentar remover recebimento\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let receb = new Recebimento();
    try {
      receb.idrecebimento = body.idrecebimento;
      let busca = await Recebimento.findOne({
        idrecebimento: receb.idrecebimento,
      });
      receb.atendente = body.atendente;
      receb.data_hora = body.data_hora;
      receb.medicamentoPosto = body.medicamentoPosto;
      receb.pessoa = body.pessoa;
      receb.quantidademedicamentos = body.quantidademedicamentos;
      return await Recebimento.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar estado\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
