import { Injectable, Inject } from '@nestjs/common';
import { Solicitacao } from '../model/solicitacao.entity';

@Injectable()
export class SolicitacaoService {
  async readAll(pag: number): Promise<Solicitacao[] | any> {
    return Solicitacao.createQueryBuilder('solicitacao')
      .select(
        'solicitacao.idsolicitacao, solicitacao.data_hora, solicitacao.quantidademedicamento, solicitacao.estadosolicitacao, titular.idpessoa as idtitular, pessoa.nome as pessoa, titular.numerosus, depedente.idpessoa as iddepedente, medicamentoPosto.datavencimento, medicamentoPosto.idmedicamentoposto, posto.idposto, posto.nome as posto, medicamento.idmedicamento, medicamento.nome as medicamento',
      )
      .innerJoin('solicitacao.titular', 'titular')
      .innerJoin('solicitacao.medicamentoPosto', 'medicamentoPosto')
      .innerJoin('titular.pessoa', 'pessoa')
      .innerJoin('titular.depedente', 'depedente')
      .innerJoin('medicamentoPosto.posto', 'posto')
      .innerJoin('medicamentoPosto.medicamento', 'medicamento')
      .innerJoin('medicamento.laboratorio', 'laboratorio')
      .offset(pag * 10)
      .limit(10)
      .getRawMany();
  }

  async readOne(id: number): Promise<Solicitacao | any> {
    return Solicitacao.findOne({ idsolicitacao: id });
  }

  async Create(body: any) {
    let solicitacao = new Solicitacao();
    try {
      solicitacao.idsolicitacao = body.idsolicitacao;
      solicitacao.medicamentoPosto = body.medicamentoPosto;
      solicitacao.data_hora = body.data_hora;
      solicitacao.titular = body.titular;
      solicitacao.quantidademedicamento = body.quantidademedicamento;
      solicitacao.estadosolicitacao = body.estadosolicitacao;
      console.log(solicitacao)
      return await Solicitacao.createQueryBuilder()
        .insert()
        .into(Solicitacao)
        .values([
          {
            medicamentoPosto: body.medicamentoPosto,
            data_hora: body.data_hora,
            titular: body.titular,
            quantidademedicamento: body.quantidademedicamento,
            estadosolicitacao: body.estadosolicitacao,
          },
        ])
        .execute();
    } catch (err) {
      throw new Error(
        `Erro ao verificar Solicitacao\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Solicitacao> {
    let solicitacao = new Solicitacao();
    let busca;
    solicitacao.idsolicitacao = body.idsolicitacao;
    try {
      busca = await Solicitacao.findOne({
        idsolicitacao: solicitacao.idsolicitacao,
      });
      return await Solicitacao.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao tentar remover Solicitacao\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let solicitacao = new Solicitacao();
    try {
      solicitacao.idsolicitacao = body.idSolicitacao;
      let busca = await Solicitacao.findOne({
        idsolicitacao: solicitacao.idsolicitacao,
      });
      solicitacao.medicamentoPosto = body.medicamentoPosto;
      solicitacao.data_hora = body.data_hora;
      solicitacao.medicamentoPosto = body.medicamentoPosto;
      solicitacao.titular = body.titular;
      solicitacao.quantidademedicamento = body.quantidademedicamento;
      solicitacao.estadosolicitacao = body.estadosolicitacao;
      return await Solicitacao.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar estado\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
