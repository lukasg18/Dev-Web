import { Injectable, Inject } from '@nestjs/common';
import { Jogo, statusEnum } from '../model/jogo.entity';
import { Plataforma } from '../model/plataforma.entity';
import { PlataformaService } from './plataforma.service';
import { GeneroService } from './genero.service';
import { Genero } from '../model/genero.entity';
import { Locacao } from '../model/locacao.entity';

@Injectable()
export class RecomendacaoService {
  async readAll() {
    return await Jogo.find();
  }

  async searchByFull(params) {
    return await Locacao.find({
      
      order:{
        datalocacao:'ASC'
      },
      where: { pessoa: params.idpessoa },
      take: 2,
    });
  }

  async getWhere(query) {
    const keysPermitidas = ['jogo', 'genero', 'plataforma', 'status'];
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
          if (key == 'status') {
            where += `jogo.status = '${query[key]}' and `;
          } else {
            where += `${key}.nome ILIKE '%${query[key]}%' and `;
          }
        }
      });
    return where.substr(0, where.length - 4);
  }
}
