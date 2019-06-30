import { Injectable, Inject } from '@nestjs/common';
import { ContaBancaria } from '../model/conta-bancaria.entity';
import { Pessoa } from '../model/pessoa.entity';
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
      principal,
      idPessoa  } = body;
    
    const pessoa = await Pessoa.findOne({where: {idpessoa: idPessoa}})

    if (!pessoa) {
      throw new Error(`Não foi possivel encontrar Pessoa`);      
    }

    try {
      const pagarmePostData = {
        bank_code: codigoBanco,
        conta: numeroConta,
        conta_dv: verificador,
        document_number:numeroDocumento,
        legal_name:nomeTitular,
        agencia: agencia
      }
        
      const pagarmeCountResponse = await pagarme.createBankAccount(pagarmePostData)
      
      const pagarmeRecipentResponse = await pagarme.createRecipient({
        bank_account_id: (pagarmeCountResponse.id).toString(),
        transfer_interval: 'daily',
        transfer_enabled: true }
      )
          
      contaBancaria.tipoConta = tipoConta
      contaBancaria.codigoBanco  = codigoBanco
      contaBancaria.numeroConta = numeroConta
      contaBancaria.verificador = verificador
      contaBancaria.agencia = agencia
      contaBancaria.numeroDocumento = numeroDocumento
      contaBancaria.documento = documento
      contaBancaria.nomeTitular = nomeTitular
      contaBancaria.principal = principal
      contaBancaria.metadata = JSON.stringify(pagarmeCountResponse)
      contaBancaria.idGateway = (pagarmeCountResponse.id).toString()    
      contaBancaria.recebedorPagarme = (pagarmeRecipentResponse.id).toString()
      contaBancaria.pessoa = pessoa 

      return ContaBancaria.save(contaBancaria)
            
    } catch (err) {
            
      throw new Error(
        `Erro ao salvar atedente\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

}
