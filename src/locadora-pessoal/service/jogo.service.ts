import { Injectable, Inject } from '@nestjs/common';
import { Jogo, statusEnum } from '../model/jogo.entity';
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
    let genero = new Array<Genero>();
    let plataforma = new Array<Plataforma>();
    try {
      for (let index = 0; index < body.plataforma.length; index++) {
        plataforma.push(await plataformaService.Create(body.plataforma[index]));
      }

      for (let index = 0; index < body.genero.length; index++) {
        genero.push(await generoService.Create(body.genero[index]));
      }

      busca = await Jogo.findOne({ idjogo: body.idjogo });
      if (busca != undefined) {
        return this.Update(body, busca, genero, plataforma);
      } else {
        jogo.genero = genero;
        jogo.plataforma = plataforma;

        jogo.nome = body.nome;
        jogo.descricao = body.descricao;
        jogo.urlimagem = body.urlimagem;
        jogo.anolancamento = body.anolancamento;
        jogo.classificacao = body.classificacao;
        jogo.multiplayer = body.multiplayer;
        jogo.produtora = body.produtora;
        jogo.status = 0;
        return await Jogo.save(jogo);
      }
    } catch (err) {
      throw new Error(
        `Erro ao criar Jogo\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body, busca, genero, plataforma) {
    try {
      busca.genero = genero;
      busca.plataforma = plataforma;

      busca.nome = body.nome;
      busca.descricao = body.descricao;
      busca.urlimagem = body.urlimagem;
      busca.anolancamento = body.anolancamento;
      busca.classificacao = body.classificacao;
      busca.multiplayer = body.multiplayer;
      busca.produtora = body.produtora;
      busca.status = body.status;
      return await Jogo.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar Jogo\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Jogo> {
    let busca = new Jogo();
    try {
      busca = await Jogo.findOne({ idjogo: body.idjogo });
      busca.status = statusEnum.inativo;
      return await Jogo.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao inativar Jogo\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
