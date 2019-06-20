import { Injectable, Inject } from '@nestjs/common';
import { Locacao } from '../model/locacao.entity';
import { Pagarme } from '../gateways/pagarme';
import { PessoaJogo } from '../model/pessoa_jogo.entity';
import { LOADIPHLPAPI } from 'dns';
import { Pessoa } from 'locadora-pessoal/model/pessoa.entity';
import { Pagamento } from 'locadora-pessoal/model/pagamento.entity';

const moment = require('moment')

@Injectable()
export class PagamentoService {

  async readAll(): Promise<Pagamento[] | any> {
    return Pagamento.find();
  }

  async readOne(id: number): Promise<Pagamento | any> {
    return Pagamento.findOne({ idpagamento: id });
  }

  async Create(body: any): Promise<Pagamento | any> {
    try {
        const {tipo, modelo} = body
   
        if (tipo === 1 ) {
            const { pessoajogo } = modelo

            const periodoLocacao = {
                dataLocacao: modelo.datalocacao,
                dataDevolucao: modelo.datadevolucao
            }

            const valorTotal = this.calcularPreco({preco: pessoajogo.preco, periodoLocacao})
        }




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
