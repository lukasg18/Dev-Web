import { Injectable, Inject } from '@nestjs/common';
import { RegistroMedicamento } from '../model/registro-medicamento.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class RegMedService implements genericInterface<RegistroMedicamento> {
  async readAll() {
    return await RegistroMedicamento.find();
  }

  async readOne(id: number) {
    return await RegistroMedicamento.findOne({ idregistromedicamento: id });
  }

  async Create(body: any) {
    let regmed = new RegistroMedicamento();
    try {
      regmed.quantidade = body.quantidade;
      regmed.data_hora = body.data_hora;
      regmed.atendente = body.idatendente;
      regmed.medicamentoPosto = body.idmedicamentoposto;
      console.log(regmed);
      return await RegistroMedicamento.save(regmed);
    } catch (err) {
      throw new Error(
        `Erro ao verificar registro medicamento\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<RegistroMedicamento> {
    let regmed = new RegistroMedicamento();
    let busca;
    regmed.idregistromedicamento = body.idregistromedicamento;
    try {
      busca = await RegistroMedicamento.findOne({
        idregistromedicamento: regmed.idregistromedicamento,
      });
      return await RegistroMedicamento.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao tentar remover registro-medicamento\n Erro: ${
          err.name
        }\n Mensagem: ${err.message}\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let regmed = new RegistroMedicamento();
    try {
      regmed.idregistromedicamento = body.idregistromedicamento;
      let busca = await RegistroMedicamento.findOne({
        idregistromedicamento: regmed.idregistromedicamento,
      });
      busca.atendente = body.idatendente;
      busca.data_hora = body.data_hora;
      busca.quantidade = body.quantidade;
      busca.medicamentoPosto = body.idmedicamentoPosto;
      return await RegistroMedicamento.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar registro medicamento\n Erro: ${
          err.name
        }\n Mensagem: ${err.message}\n Os parametros estao certos?`,
      );
    }
  }
}
