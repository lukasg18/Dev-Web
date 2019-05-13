import { Injectable, Inject } from '@nestjs/common';
import { Jogo } from '../model/jogo.entity';
import { Plataforma } from '../model/plataforma.entity';
import { PlataformaService } from './plataforma.service';
import { GeneroService } from './genero.service';
import { Genero } from '../model/genero.entity';

@Injectable()
export class JogoService {
  async readAll() {
    return await Jogo.find();
  }

  async searchByFull(params) {
    return Jogo.find({
      join: {
        alias: 'jogo',
        leftJoinAndSelect: {
          genero: 'jogo.genero',
          plataforma: 'jogo.plataforma',
        },
      },
      where: this.getWhere(params),
      skip: params.pag * 10,
      take: 10,
    });
  }

  getWhere(query) {
    const keysPermitidas = ['jogo', 'genero', 'plataforma'];
    let where = '';
    Object.keys(query)
      .filter(key => keysPermitidas.indexOf(key) !== -1)
      .forEach(key => {
        if (Array.isArray(query[key])) {
          where += '( ';
          query[key].forEach(element => {
            where += `${key}.nome ILIKE '%${element}%' or `;
          });
          where = where.substr(0, where.length - 3);
          where += ') and ';
        } else {
          where += `${key}.nome ILIKE '%${query[key]}%' and `;
        }
      });
    return where.substr(0, where.length - 4);
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

  async Create(body: any): Promise<Jogo | any> {
    let jogo = new Jogo();
    let plataformaService = new PlataformaService();
    let generoService = new GeneroService();
    let plataforma = new Array<Plataforma>();
    let genero = new Array<Genero>();
    let busca = new Jogo();
    try {
      await plataformaService.Create(body);
      await generoService.Create(body);

      busca = await Jogo.findOne({ nome: body.jogo });
      if (busca != undefined) {
        return busca;
      } else {

        genero.push(await generoService.readOne(body.genero));
        console.log(genero)
        plataforma.push(await plataformaService.readOne(body.plataforma));
        jogo.genero = genero
        jogo.plataforma = plataforma
        console.log(jogo)


        jogo.nome = body.jogo;
        jogo.urlimagem = body.url;
        jogo.anolancamento = body.data;
        console.log(jogo)
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
