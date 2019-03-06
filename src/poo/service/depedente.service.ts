import { Injectable, Inject } from '@nestjs/common';
import { Depedente } from '../model/depedente.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class DependenteService implements genericInterface<Depedente>{
  async readAll(): Promise<Depedente[] | any> {
    return Depedente.find();
  }

  async readOne(id: number): Promise<Depedente | any> {
    return Depedente.findOne({ idpessoa: id });
  }

  async Create(body: any): Promise<Depedente> {
    let depedente = new Depedente();
    try {
      depedente.idpessoa = body.idpessoa;
      depedente.titular = body.idtitular;
      return await Depedente.save(depedente);
    } catch (err) {
      throw new Error(
        `Erro ao salvar Depedente \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Depedente> {
    let busca;
    try {
      busca = await Depedente.findOne({
        idpessoa: body.idpessoa,
      });
      return await Depedente.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar Depedente \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<Depedente> {
    try {
      let busca = await Depedente.findOne({
        idpessoa: body.idpessoa,
      });
      busca.idpessoa = body.novoregistro;
      return await Depedente.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar Depedente \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
