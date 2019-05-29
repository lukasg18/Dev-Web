import { Injectable, Inject } from '@nestjs/common';
import { Genero } from '../model/genero.entity';

@Injectable()
export class GeneroService{
  async readAll() {
    return await Genero.find();
  }

  async readOne(nome: string) {
    return await Genero.findOne({ nome: nome });
  }

  async Create(body: any) {
    let genero = new Genero();
    try {
      let busca = await Genero.findOne({ nome: body.nome });
      if (busca != undefined) {
        return busca;
      } else {
      genero.nome = body.nome;
      return await Genero.save(genero);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar genero\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let e = new Genero();
    try {
      e.idgenero = body.idgenero;
      let busca = await Genero.findOne({ idgenero: e.idgenero });
      busca.nome = body.nome;
      return await Genero.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar genero\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  Drop(body: any): Promise<Genero> {
    throw new Error('Method not implemented.');
  }
}
