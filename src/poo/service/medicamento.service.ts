import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Medicamento } from '../model/medicamento.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class MedicamentoService implements genericInterface<Medicamento>{
  async readAll(): Promise<Medicamento[] | any> {
    return Medicamento.find();
  }

  async readOne(id: number): Promise<Medicamento | any> {
    return Medicamento.findOne({ idmedicamento: id });
  }

  async Create(body: any): Promise<Medicamento> {
    let medicamento = new Medicamento();
    try {
      medicamento.nome = body.nome;
      medicamento.bula = body.bula;
      return await Medicamento.save(medicamento);
    } catch (err) {
      throw new Error(
        `Erro ao salvar Medicamento \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Medicamento> {
    let busca;
    try {
      busca = await Medicamento.findOne({
        idmedicamento: body.id,
      });
      return await Medicamento.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar Medicamento \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<Medicamento> {
    try {
      let busca = await Medicamento.findOne({
        idmedicamento: body.id,
      });
      busca.nome = body.idposto;
      busca.bula = body.idmedicamento;
      return await Medicamento.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar Medicamento \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
