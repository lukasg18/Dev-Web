import { Injectable, Inject } from '@nestjs/common';
import { Bairro } from '../model/bairro.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class BairroService implements genericInterface<Bairro> {
  async readAll() {
    return await Bairro.find();
  }

  async readOne(id: number) {
    return await Bairro.findOne({ idbairro: id });
  }

  async Create(body: any) {
    try {
      let bairro = new Bairro();
      bairro.nome = body.nome;
      bairro.municipio = body.idmunicipio;
      return await Bairro.save(bairro);
    } catch (err) {
      throw new Error(
        `Erro ao verificar bairro\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body) {
    try {
      let b = new Bairro();
      let busca;
      b.nome = body.nome;
      busca = await Bairro.findOne({ nome: b.nome });
      return await Bairro.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao remover bairro\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    try {
      let b = new Bairro();
      b.idbairro = body.idbairro;
      let busca = await Bairro.findOne({ idbairro: b.idbairro });
      busca.nome = body.nome;
      return await Bairro.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao remover bairro\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
