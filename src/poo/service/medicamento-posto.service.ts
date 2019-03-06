import { Injectable, Inject } from '@nestjs/common';
import { MedicamentoPosto } from '../model/medicamento-posto.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class MedicamentoPostoService implements genericInterface<MedicamentoPosto>{
  async readAll(): Promise<MedicamentoPosto[] | any> {
    return MedicamentoPosto.find();
  }

  async readOne(id: number): Promise<MedicamentoPosto | any> {
    return MedicamentoPosto.findOne({ idmedicamentoposto: id });
  }

  async Create(body: any): Promise<MedicamentoPosto> {
    let mp = new MedicamentoPosto();
    try {
      mp.posto = body.idposto;
      mp.medicamento = body.idmedicamento;
      mp.datavencimento = body.datavencimento;
      mp.estadomedicamento = body.estadomedicamento;
      mp.quantidade = body.quantidade;
      mp.medicamento = body.idmedicamento;
      return await MedicamentoPosto.save(mp);
    } catch (err) {
      throw new Error(
        `Erro ao salvar MedicamentoPosto \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<MedicamentoPosto> {
    let busca;
    try {
      busca = await MedicamentoPosto.findOne({
        idmedicamentoposto: body.id,
      });
      return await MedicamentoPosto.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar MedicamentoPosto \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<MedicamentoPosto> {
    try {
      let busca = await MedicamentoPosto.findOne({
        idmedicamentoposto: body.id,
      });
      busca.posto = body.idposto;
      busca.medicamento = body.idmedicamento;
      busca.datavencimento = body.datavencimento;
      busca.estadomedicamento = body.estadomedicamento;
      busca.quantidade = body.quantidade;
      return await MedicamentoPosto.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar MedicamentoPosto \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
