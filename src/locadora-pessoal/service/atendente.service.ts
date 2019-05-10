import { Injectable, Inject } from '@nestjs/common';
import { Atendente } from '../model/atendente.entity';

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
    try {
      atendente.numeroregistro = body.numeroregistro;
      atendente.idpessoa = body.idpessoa;
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
