import { Injectable, Inject } from '@nestjs/common';
import { genericInterface } from './interface/generic.interface';
import { Posto } from '../model/posto.entity';

@Injectable()
export class PostoService implements genericInterface<Posto>{
  async readAll(): Promise<Posto[] | any> {
    return Posto.find();
  }

  async readOne(id: number): Promise<Posto | any> {
    return Posto.findOne({ idposto: id });
  }

  async Create(body: any): Promise<Posto> {
    let posto = new Posto();
    try {
      posto.nome = body.nome;
      posto.complemento = body.complemento;
      posto.rua = body.rua;
      posto.cep = body.cep;
      posto.numero = body.numero;
      posto.coordgeolat = body.coordgeolat;
      posto.coordgeolong = body.coordgeolong;
      posto.bairro = body.idbairro;
      return await Posto.save(posto);
    } catch (err) {
      throw new Error(
        `Erro ao salvar Posto \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Posto> {
    let busca;
    try {
      busca = await Posto.findOne({
        idposto: body.id,
      });
      return await Posto.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar Posto \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<Posto> {
    try {
      let busca = await Posto.findOne({
        idposto: body.id,
      });
      busca.nome = body.nome;
      busca.complemento = body.complemento;
      busca.rua = body.rua;
      busca.cep = body.cep;
      busca.numero = body.numero;
      busca.coordgeolat = body.coordgeolat;
      busca.coordgeolong = body.coordgeolong;
      busca.bairro = body.idbairro;
      return await Posto.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar Posto \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
