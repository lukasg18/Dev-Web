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

  async Create(body: any): Promise<Jogo | any> {
    let jogo = new Jogo();
    let plataformaService = new PlataformaService();
    let generoService = new GeneroService();
    let busca = new Jogo();
    try {
      for (let index = 0; index < body.plataforma.length; index++) {
        await plataformaService.Create(body.plataforma[index]);
      }

      for (let index = 0; index < body.genero.length; index++) {
        await generoService.Create(body.genero[index]);
      }

      busca = await Jogo.findOne({ nome: body.nome });
      if (busca != undefined) {
        return busca;
      } else {
        jogo.genero = body.genero;
        jogo.plataforma = body.plataforma;

        jogo.nome = body.nome;
        jogo.descricao = body.descricao;
        jogo.urlimagem = body.urlimagem;
        jogo.anolancamento = body.anolancamento;
        jogo.classificacao = body.classificacao;
        jogo.multiplayer = body.multiplayer;
        jogo.produtora = body.produtora;
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
    throw new Error('Method not implemented.');
  }

  Drop(body: any): Promise<Jogo> {
    throw new Error('Method not implemented.');
  }
}
