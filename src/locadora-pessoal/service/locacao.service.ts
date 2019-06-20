import { Injectable, Inject } from '@nestjs/common';
import { Locacao } from '../model/locacao.entity';
import { Pagarme } from '../gateways/pagarme';
import { PessoaJogo } from '../model/pessoa_jogo.entity';
import { LOADIPHLPAPI } from 'dns';
import { Pessoa } from 'locadora-pessoal/model/pessoa.entity';
const moment = require('moment')

@Injectable()
export class LocacaoService {

  async readAll(): Promise<Locacao[] | any> {
    return Locacao.find();
  }

  async readOne(id: number): Promise<Locacao | any> {
    return Locacao.findOne({ idlocacao: id });
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
        // to do
      }

      locacao.pessoa = pessoa;
      locacao.pessoajogo = pessoaJogo
                
      const periodoLocacao = {
        dataLocacao: locacao.datalocacao,
        dataDevolucao: locacao.datadevolucao
      }

      const valorTotal = this.calcularPreco({preco: pessoaJogo.preco, periodoLocacao})

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
