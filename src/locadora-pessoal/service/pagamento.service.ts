import { Injectable, Inject } from '@nestjs/common';
import { Pagamento, metodoPagamento } from '../model/pagamento.entity';
import { CartaoCredito } from '../model/cartao-credito.entity'
import { Pagarme } from '../gateways/pagarme';

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
        const {tipo} = body
   
        switch (tipo){
            case 1:
                return this.pagarLocacao(body)
            default:
                return ""
        }

    } catch (err) {

      throw new Error(
        `Erro ao salvar atedente\n Erro: ${err.name}\n Mensagem: ${
        err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async pagarLocacao(data): Promise<any> {
    
    const { modelo: locacao } = data 

    const { pessoajogo } = locacao

    const periodoLocacao = {
        dataLocacao: locacao.datalocacao,
        dataDevolucao: locacao.datadevolucao
    }
    
    const valorTotal = this.calcularPreco({preco: pessoajogo.preco, periodoLocacao})

    const pagamento = new Pagamento()
    pagamento.tipopagamento = 1
    pagamento.status = 0
    pagamento.valor = valorTotal
    pagamento.metodopagamento = data.metodoPagamento

    if (data.metodoPagamento = 1 ) {
      const cartao = await CartaoCredito.findOne({where: {idcartao: data.idcartao}})

      if (!cartao ) {
        // to do
      }
      pagamento.cartaocredito = cartao
    }

    const pagamentoResponse =  await  Pagamento.save(pagamento)

    const pagarme = new Pagarme();

    const pagamentoPagarme = await pagarme.createTransaction({pagamento:pagamentoResponse, locacao })
    
    return pagamentoResponse
  }

  calcularPreco({preco, periodoLocacao}: any): any {
    const dataLocacao = moment(periodoLocacao.dataLocacao)
    const dataDevolucao = moment(periodoLocacao.dataDevolucao)
    const dias = dataDevolucao.diff(dataLocacao, 'days')
  
    return (dias * preco)
  }

}
