import { Injectable, Inject } from '@nestjs/common';
import { Locacao } from '../model/locacao.entity';
import { Pagarme } from '../gateways/pagarme';
import { PessoaJogo } from '../model/pessoa_jogo.entity';

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
      locacao.pessoa = body.pessoa;
      locacao.pessoajogo = body.pessoajogo;
      locacao.status = 1;

      const pessoaJogo = await PessoaJogo.findOne({ where: { idpessoa: locacao.pessoajogo} });

      // if (!pessoaJogo) {
      //   // to do
      // }

      console.log(pessoaJogo);
      
      
    } catch (err) {

      throw new Error(
        `Erro ao salvar atedente\n Erro: ${err.name}\n Mensagem: ${
        err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  calcularPreco(data: any): any {
    // to do
  }

}
