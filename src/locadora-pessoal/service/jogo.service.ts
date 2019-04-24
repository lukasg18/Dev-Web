import { Injectable, Inject } from '@nestjs/common';
import { Genero } from '../model/genero.entity';
import { Jogo } from '../model/jogo.entity';
import { Plataforma } from '../model/plataforma.entity';
import { Like } from 'typeorm';

@Injectable()
export class JogoService {
  async readAll() {
    return await Jogo.find();
  }

  async searchByFull(params) {
    let x = "''";
    return Jogo.find({
      join: {
        alias: 'jogo',
        leftJoinAndSelect: {
          genero: 'jogo.genero',
          plataforma: 'jogo.plataforma',
        },
      },
      where:
        "jogo.nome ILIKE '%" +
        params.nome +
        "%' and genero.nome ILIKE '%" +
        params.genero +
        "%'" +
        " and plataforma.nome ILIKE '%" +
        params.plataforma +
        "%'",
      skip: params.pag * 10,
      take: 10,
    });
    // return Jogo.find({where: {nome: Like(`%${nome}%`)}})
    // createQueryBuilder('jogo')
    // .select(
    //   'jogo.nome, jogo.anolancamento, plataforma.nome as plataforma, genero.nome as genero',
    // )
    // .innerJoin('jogo.plataforma', 'plataforma')
    // .innerJoin('jogo.genero', 'genero')
    // .where("jogo.nome ILIKE :jogo", { jogo: `%${nome}%` })
    // .getRawMany()
  }

  async searchByParams(nome: string, pag: number) {
    return Jogo.createQueryBuilder('jogo')
      .select(
        'jogo.nome, jogo.anolancamento, plataforma.nome as plataforma, genero.nome as genero',
      )
      .innerJoin('jogo.plataforma', 'plataforma')
      .innerJoin('jogo.genero', 'genero')
      .where('jogo.nome ILIKE :jogo', { jogo: `%${nome}%` })
      .getRawMany();
  }

  async Create(body: any) {
    let jogo = new Jogo();
    try {
      let busca = await Jogo.findOne({ nome: body.jogo });
      if (busca != undefined) {
        return busca;
      } else {
        jogo.nome = body.genero;
        return await Jogo.save(jogo);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar Jogo\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let e = new Jogo();
    try {
      e.idjogo = body.idgenero;
      let busca = await Jogo.findOne({ idjogo: e.idjogo });
      busca.nome = body.nome;
      return await Jogo.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar Jogo\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  Drop(body: any): Promise<Jogo> {
    throw new Error('Method not implemented.');
  }
}
