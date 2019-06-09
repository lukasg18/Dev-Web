import { Injectable, Inject } from '@nestjs/common';
import { ContaBancaria } from '../model/conta-bancaria.entity';
import { Pagarme } from '../gateways/pagarme';

@Injectable()
export class ContaBancariaService {
  
  async readAll(): Promise<ContaBancaria[] | any> {
    return ContaBancaria.find();
  }

  async readOne(id: number): Promise<ContaBancaria | any> {
    return ContaBancaria.findOne({ idconta: id });
  }

  async Create(body: any): Promise<ContaBancaria | any> {
    let contaBancaria = new ContaBancaria();
    const pagarme = new Pagarme();

    const { 
      tipoConta, 
      codigoBanco,
      numeroConta, 
      verificador,
      agencia, 
      numeroDocumento,
      documento,
      nomeTitular,
      principal } = body;
    
    try {

    
      const pagarmePostData = {
        bank_code: codigoBanco,
        conta: numeroConta,
        conta_dv: verificador,
        document_number:numeroDocumento,
        legal_name:nomeTitular,
        agencia: agencia
      }

      const pagarmeResponse = await pagarme.createBankAccount(pagarmePostData)

      contaBancaria.tipoConta = tipoConta
      contaBancaria.codigoBanco  = codigoBanco
      contaBancaria.numeroConta = numeroConta
      contaBancaria.verificador = verificador
      contaBancaria.agencia = agencia
      contaBancaria.numeroDocumento = numeroDocumento
      contaBancaria.documento = documento
      contaBancaria.nomeTitular = nomeTitular
      contaBancaria.principal = principal
      contaBancaria.metadata = JSON.stringify(pagarmeResponse)
      contaBancaria.idGateway = (pagarmeResponse.id).toString()

      console.log(contaBancaria);
      
      
      await ContaBancaria.save(contaBancaria);
      
      return "topViado"
    } catch (err) {
      console.log(err);
            
      throw new Error(
        `Erro ao salvar atedente\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

}
