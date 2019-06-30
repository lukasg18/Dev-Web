import { Injectable, Inject } from '@nestjs/common';
import { Locacao } from '../model/locacao.entity';
import { PessoaJogo } from '../model/pessoa_jogo.entity';
import { Pessoa } from '../model/pessoa.entity';
import { MoreThanOrEqual } from 'typeorm';
const moment = require('moment')

@Injectable()
export class LocacaoService {

  async readAll(): Promise<Locacao[] | any> {
    return Locacao.find();
  }

  async readOne(id: number): Promise<Locacao | any> {
    return Locacao.findOne({ idlocacao: id });
  }

  async readUser(id: number): Promise<Locacao | any> {
    let buscaPessoa;
    let datacorrente = moment().format()
    console.log(datacorrente)
    buscaPessoa = await PessoaJogo.findOne({ idpessoa: id });
    return Locacao.find({
      join: {
        alias: 'locacao',
        leftJoinAndSelect: {
          pessoajogo: 'locacao.pessoajogo',
          jogo: 'pessoajogo.jogo',
          genero: 'jogo.genero',
          plataforma: 'jogo.plataforma',
        },
      },
      where: {
        pessoa: buscaPessoa,
        datadevolucao: MoreThanOrEqual(datacorrente)
      },
    });
  }

  async Create(body: any): Promise<Locacao | any> {
    try {
      const locacao = new Locacao()

      locacao.datadevolucao = body.datadevolucao;
      locacao.datalocacao = body.datalocacao;
      locacao.status = 1;

      const pessoa = await Pessoa.findOne({where: {idpessoa: body.pessoa}})
      const pessoaJogo = await PessoaJogo.findOne({ where: { idpessoa: body.idpessoa, idjogo: body.idjogo} });
      
      if (!pessoaJogo) {
        throw new Error(`Não foi possivel encontrar PessoaJogo`);      
      }

      locacao.pessoa = pessoa;
      locacao.pessoajogo = pessoaJogo
                
    
      
      return Locacao.save(locacao)
            
    } catch (err) {

      throw new Error(
        `Erro ao salvar atedente\n Erro: ${err.name}\n Mensagem: ${
        err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  calcularPreco({preco, periodoLocacao}: any): any {
    const dataLocacao = moment(periodoLocacao.dataLocacao)
    const dataDevolucao = moment(periodoLocacao.dataDevolucao)
    const dias = dataDevolucao.diff(dataLocacao, 'days')
  
    return (dias * preco)
  }

}
