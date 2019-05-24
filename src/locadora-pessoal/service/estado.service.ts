import { Injectable, Inject } from '@nestjs/common';
import { Estado } from '../model/estado.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class EstadoService{
  async readAll() {
    return await Estado.find();
  }

  async readOne(nome: string) {
    return await Estado.findOne({ nome: nome });
  }

  async Create(body: any) {
    let estado = new Estado();
    try {
      let busca = await Estado.findOne({ nome: body.cep.bairro.municipio.estado.nome });
      if (busca != undefined) {
        return busca;
      } else {
      estado.nome = body.cep.bairro.municipio.estado.nome;
      return await Estado.save(estado);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar estado\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let e = new Estado();
    try {
      e.idestado = body.idestado;
      let busca = await Estado.findOne({ idestado: e.idestado });
      busca.nome = body.nome;
      return await Estado.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar estado\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  Drop(body: any): Promise<Estado> {
    throw new Error('Method not implemented.');
  }
}
