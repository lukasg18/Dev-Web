import { Injectable, Inject } from '@nestjs/common';
import { Jogo } from '../model/jogo.entity';
import { PessoaJogo } from '../model/pessoa_jogo.entity';

@Injectable()
export class PessoaJogoService {
  async Create(body: any): Promise<PessoaJogo | any> {
    let pessoaJogo = new PessoaJogo();
    let busca: PessoaJogo;
    try {
      busca = await PessoaJogo.findOne({
        where: { idpessoa: body.pessoa, idjogo: body.jogo },
      });
      if (busca != undefined) {
        return busca;
      } else {
        console.log("entrei")
        pessoaJogo.idjogo = body.jogo;
        pessoaJogo.idpessoa = body.pessoa;
        pessoaJogo.preco = body.preco;
        pessoaJogo.vitrine = true;
        return await PessoaJogo.save(pessoaJogo);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar Jogo\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async searchByFull(params) {
    return Jogo.find({
      join: {
        alias: 'jogo',
        leftJoinAndSelect: {
          genero: 'jogo.genero',
          plataforma: 'jogo.plataforma',
          pessoajogo: 'jogo.pessoajogo',
          pessoa: 'pessoajogo.pessoa',
          cep: 'pessoa.cep',
          bairro: 'cep.bairro',
          municipio: 'bairro.municipio',
          estado: 'municipio.estado',
        },
      },
      where: this.getWhere(params),
      skip: params.pag * 10,
      take: 10,
    });
  }

  async searchById(params) {
    return PessoaJogo.find({
      join: {
        alias: 'pessoajogo',
        leftJoinAndSelect: {
          jogo: 'pessoajogo.jogo',
          genero: 'jogo.genero',
          plataforma: 'jogo.plataforma',
        },
      },
      where: {idpessoa: params.idpessoa},
      skip: params.pag * 10,
      take: 10,
    });
  }

  getWhere(query) {
    const keysPermitidas = [
      'jogo',
      'genero',
      'plataforma',
      'bairro',
      'municipio',
      'estado',
      'pessoajogo',
    ];
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
          if (key == 'pessoajogo') {
            where += `${key}.vitrine = '${query[key]}' and `
          } else {
            where += `${key}.nome ILIKE '%${query[key]}%' and `;
          }
        }
      });
    return where.substr(0, where.length - 4);
  }

  async Update(body) {
    throw new Error('Method not implemented.');
  }

  Drop(body: any): Promise<Jogo> {
    throw new Error('Method not implemented.');
  }
}
