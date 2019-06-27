import { Injectable, Inject } from '@nestjs/common';
import { Genero, statusEnum } from '../model/genero.entity';

@Injectable()
export class GeneroService {
  async readAll(params) {
    return await Genero.find({
      where: await this.getWhere(params),
      skip: params.pag * 10,
      take: 10,
    });
  }

  async getWhere(query) {
    const keysPermitidas = ['status'];
    let where = '';
    Object.keys(query)
      .filter(key => keysPermitidas.indexOf(key) !== -1)
      .forEach(key => {
        if (key == 'status') {
          where += `Genero.status = '${query[key]}' and `;
        }
      });
    return where.substr(0, where.length - 4);
  }

  async readOne(nome: string) {
    return await Genero.findOne({ nome: nome });
  }

  async Create(body: any) {
    let genero = new Genero();
    try {
      let busca = await Genero.findOne({ idgenero: body.idgenero });
      if (busca != undefined) {
        return this.Update(body, busca);
      } else {
        genero.nome = body.nome;
        genero.status = 0;
        return await Genero.save(genero);
      }
    } catch (err) {
      throw new Error(
        `Erro ao criar genero\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body, busca) {
    try {
      busca.nome = body.nome;
      busca.status = body.status;
      return await Genero.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar genero\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any) {
    let busca = new Genero();
    try {
      busca = await Genero.findOne({ idgenero: body.idgenero });
      busca.status = statusEnum.inativo;
      return await Genero.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao inativar Plataforma\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
