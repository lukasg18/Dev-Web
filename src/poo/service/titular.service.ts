import { Injectable, Inject } from '@nestjs/common';
import { Titular } from '../model/titular.entity';

@Injectable()
export class TitularService {
  async readAll(): Promise<Titular[] | any> {
    return Titular.find();
  }

  async readOne(id: number): Promise<Titular | any> {
    return Titular.findOne({ idpessoa: id });
  }

  async Create(body: any): Promise<Titular> {
    let titular = new Titular();
    try {
      titular.numerosus = body.numerosus;
      titular.idpessoa = body.idpessoa;
      return await Titular.save(titular);
    } catch (err) {
      throw new Error(
        `Erro ao salvar titular \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Titular> {
    let busca;
    try {
      busca = await Titular.findOne({
        idpessoa: body.idpessoa,
      });
      return await Titular.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar titular \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<Titular> {
    try {
      let busca = await Titular.findOne({
        idpessoa: body.idpessoa,
      });
      busca.idpessoa = body.novoregistro;
      return await Titular.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar titular \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
