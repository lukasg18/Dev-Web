import { Injectable, Inject } from '@nestjs/common';
import { Laboratorio } from '../model/laboratorio.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class LaboratorioService implements genericInterface<Laboratorio> {
  async readAll() {
    return await Laboratorio.find();
  }

  async readOne(id: number) {
    return await Laboratorio.findOne({ idlaboratorio: id });
  }

  async Create(body: any) {
    let laboratorio = new Laboratorio();
    try {
      laboratorio.idlaboratorio = body.idlaboratorio;
      laboratorio.nome = body.nome;
      return await Laboratorio.save(laboratorio);
    } catch (err) {
      throw new Error(
        `Erro ao verificar laboratorio\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Laboratorio> {
    let lab = new Laboratorio();
    let busca;
    lab.idlaboratorio = body.idlaboratorio;
    try {
      busca = await Laboratorio.findOne({
        idlaboratorio: lab.idlaboratorio,
      });
      return await Laboratorio.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao tentar remover laboratorio\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let lab = new Laboratorio();
    try {
      lab.idlaboratorio = body.idlaboratorio;
      let busca = await Laboratorio.findOne({
        idlaboratorio: lab.idlaboratorio,
      });
      busca.nome = body.nome;
      return await Laboratorio.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar laboratorio\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
