import { Injectable, Inject } from '@nestjs/common';
import { Jogo, statusEnum } from '../model/jogo.entity';
import { Plataforma } from '../model/plataforma.entity';
import { PlataformaService } from './plataforma.service';
import { GeneroService } from './genero.service';
import { Genero } from '../model/genero.entity';
import { Locacao } from '../model/locacao.entity';
import { JogoService } from './jogo.service';

@Injectable()
export class RecomendacaoService {
  async searchByIdPessoa(params) {
    return await Locacao.find({
      join: {
        alias: 'locacao',
        leftJoinAndSelect: {
          pessoajogo: 'locacao.pessoajogo',
          jogo: 'pessoajogo.jogo',
          genero: 'jogo.genero',
          plataforma: 'jogo.plataforma',
        },
      },
      order: {
        datalocacao: 'ASC',
      },
      where: { pessoa: params.idpessoa },
      take: 2,
    });
  }

  async searchBygenero(nomeGenero: string) {
    return await Locacao.createQueryBuilder('locacao')
      .select('jogo.nome as jogo')
      .addSelect('SUM(locacao.idjogo) as quantidade')
      .innerJoin('locacao.pessoajogo', 'pessoajogo')
      .innerJoin('pessoajogo.jogo', 'jogo')
      .innerJoin('jogo.genero', 'genero')
      .groupBy('jogo')
      .where('genero.nome ILIKE :nomeGenero', { nomeGenero: `${nomeGenero}%` })
      .orderBy('quantidade')
      .getRawMany();
  }

  async getTopGames(query: any) {
    let ultimosAlugados = await this.searchByIdPessoa(query);
    let generos = [];
    let topGenero = [];
    let jogos = [];
    let jogoService = new JogoService();
    let topJogos = [];
    let resultado = [];

    // pegando os ultimos alugados e retirando as repetições
    ultimosAlugados.forEach(x =>
      x.pessoajogo.jogo.genero.forEach(y => generos.push(y.nome)),
    );
    generos = generos.filter((x, i) => generos.indexOf(x) === i);

    // Buscando os jogos mais alugados pelo genero
    for (let index = 0; index < generos.length; index++) {
      topGenero.push(await this.searchBygenero(generos[index]));
    }

    //Montando array com o nome dos jogos
    topGenero.forEach(x => x.forEach(y => jogos.push(y.jogo)));

    for (let index = 0; index < jogos.length; index++) {
      topJogos.push(await jogoService.searchByFull(jogos[index]));
    }

    topJogos.forEach(x =>  x.forEach(y => resultado.push(y)))
    resultado = resultado.filter(function (a) {
      return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null))

    return resultado;
  }
}
