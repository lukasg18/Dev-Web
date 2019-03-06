import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Medicamento } from '../model/medicamento.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class RelatorioService{

   // -- Para relatório de medicamento mais retirados pelos pacientes em relação a quantidade retirada no estoque
  // CREATE VIEW view_medicamentos_mais_retirados_por_quantidade AS
  // SELECT me.nome, SUM(re.quantidademedicamentos) AS "Quantidade" FROM medicamento AS me
  // INNER JOIN medicamento_posto AS mp ON (mp.idmedicamento = me.idmedicamento)
  // INNER JOIN recebimento AS re ON (re.idmedicamentoposto = mp.idmedicamentoposto)
  // GROUP BY me.idmedicamento
  // ORDER BY "Quantidade" DESC;

  async SumMedicamentosEstoque(): Promise<Medicamento | any> {
    try {
    return Medicamento.createQueryBuilder("medicamento")
    .select("medicamento.nome")
    .addSelect("SUM(recebimento.quantidademedicamentos) as quantidade")
    .innerJoin("medicamento.medicamentoPosto", "medicamentoPosto")
    .innerJoin("medicamentoPosto.recebimento", "recebimento")
    .groupBy("medicamento.nome")
    .groupBy("medicamento.idmedicamento")
    .orderBy("medicamento.nome")
    .limit(10).getRawMany()
    } catch (err) {
      throw new Error(
        `Erro ao verificar o relatorio \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
  
  // -- Para relatório de medicamento mais retirados pelos pacientes em relação por quantidade de retiradas
  // CREATE VIEW view_medicamentos_mais_retirados_por_numero_retiradas AS
  // SELECT me.nome, COUNT(me.idmedicamento) AS "Número de Retiradas" FROM medicamento AS me
  // INNER JOIN medicamento_posto AS mp ON (mp.idmedicamento = me.idmedicamento)
  // INNER JOIN recebimento AS re ON (re.idmedicamentoposto = mp.idmedicamentoposto)
  // GROUP BY me.idmedicamento
  // ORDER BY "Número de Retiradas" DESC;
  
  async CountMedicamentosEstoque(): Promise<Medicamento | any> {
    try {
    return Medicamento.createQueryBuilder("medicamento")
    .select("medicamento.nome")
    .addSelect("COUNT(recebimento.quantidademedicamentos) as numero_de_retiradas")
    .innerJoin("medicamento.medicamentoPosto", "medicamentoPosto")
    .innerJoin("medicamentoPosto.recebimento", "recebimento")
    .groupBy("medicamento.nome")
    .groupBy("medicamento.idmedicamento")
    .orderBy("medicamento.nome")
    .limit(10).getRawMany()
    } catch (err) {
      throw new Error(
        `Erro ao verificar o relatorio \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }


  // -- Para relatório de medicamento mais solicitados pelos pacientes em relação a quantidade solicitada do estoque
  // CREATE VIEW view_medicamentos_mais_solicitados_por_quantidade AS
  // SELECT me.nome, SUM(me.idmedicamento) AS "Quantidade" FROM medicamento AS me
  // INNER JOIN medicamento_posto AS mp ON (mp.idmedicamento = me.idmedicamento)
  // INNER JOIN solicitacao AS so ON (so.idmedicamentoposto = mp.idmedicamentoposto)
  // GROUP BY me.idmedicamento
  // ORDER BY "Quantidade" DESC;

  async SumQuanntidadeSolicitado(): Promise<Medicamento | any> {
    try {
    return Medicamento.createQueryBuilder("medicamento")
    .select("medicamento.nome")
    .addSelect("SUM(solicitacao.quantidademedicamento) as quantidade")
    .innerJoin("medicamento.medicamentoPosto", "medicamentoPosto")
    .innerJoin("medicamentoPosto.solicitacao", "solicitacao")
    .groupBy("medicamento.nome")
    .groupBy("medicamento.idmedicamento")
    .orderBy("medicamento.nome")
    .limit(10).getRawMany()
    } catch (err) {
      throw new Error(
        `Erro ao verificar o relatorio \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
  
  // -- Para relatório de medicamento mais solicitados pelos pacientes em relação por quantidade de solicatações
  // CREATE VIEW view_medicamentos_mais_solicitados_por_numero_solicitacoes AS
  // SELECT me.nome, COUNT(me.idmedicamento) AS "Número de Solicitações" FROM medicamento AS me
  // INNER JOIN medicamento_posto AS mp ON (mp.idmedicamento = me.idmedicamento)
  // INNER JOIN solicitacao AS so ON (so.idmedicamentoposto = mp.idmedicamentoposto)
  // GROUP BY me.idmedicamento
  // ORDER BY "Número de Solicitações" DESC;
  
  async CountQuanntidadeSolicitado(): Promise<Medicamento | any> {
    try {
    return Medicamento.createQueryBuilder("medicamento")
    .select("medicamento.nome")
    .addSelect("COUNT(solicitacao.quantidademedicamento) as numero_de_solicitacoes")
    .innerJoin("medicamento.medicamentoPosto", "medicamentoPosto")
    .innerJoin("medicamentoPosto.solicitacao", "solicitacao")
    .groupBy("medicamento.nome")
    .groupBy("medicamento.idmedicamento")
    .orderBy("medicamento.nome")
    .limit(10).getRawMany()
    } catch (err) {
      throw new Error(
        `Erro ao verificar o relatorio \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
  
  // -- para relatório
  // CREATE VIEW view_medicamentos_para_solicitacao AS
  // SELECT me.nome AS "Nome", po.nome AS "Posto", la.nome AS "Laboratório", mp.estadomedicamento AS "Disponibilidade" FROM medicamento AS me
  // INNER JOIN medicamento_laboratorio AS ml ON(ml.idmedicamento = me.idmedicamento)
  // INNER JOIN laboratorio AS la ON (la.idlaboratorio = ml.idlaboratorio)
  // INNER JOIN medicamento_posto AS mp ON (mp.idmedicamento = me.idmedicamento)
  // INNER JOIN posto AS po ON (po.idposto = mp.idposto);

  async MedicamentosParaSolicitacao(): Promise<Medicamento | any> {
    try {
    return Medicamento.createQueryBuilder("medicamento")
    .select("medicamento.nome as medicamento, posto.nome as posto, laboratorio.nome as laboratorio, medicamentoPosto.estadomedicamento")
    .innerJoin("medicamento.medicamentoPosto", "medicamentoPosto")
    .innerJoin("medicamentoPosto.posto", "posto")
    .innerJoin("medicamento.laboratorio", "laboratorio")
    .groupBy("medicamento.nome, posto.nome, laboratorio.nome, medicamentoPosto.estadomedicamento")
    .orderBy("medicamento.nome")
    .limit(10).getRawMany()
    } catch (err) {
      throw new Error(
        `Erro ao verificar o relatorio \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
