import { Injectable, Inject } from '@nestjs/common';
import { Cep } from '../model/cep.entity';
import { BairroService } from './bairro.service';
import { Bairro } from '../model/bairro.entity';

@Injectable()
export class CepService {
  async readAll() {
    return await Cep.find();
  }

  async readOne(numero: number) {
    return await Cep.findOne({ numero: numero });
  }

  async Create(body: any) {
    let cep = new Cep();
    let busca: any;
    let bairroservice = new BairroService();
    let bairro = new Bairro();
    try {
      busca = await Cep.findOne({ numero: body.cep.numero });
      if (busca != undefined) {
        return busca;
      } else {
        bairro = await bairroservice.readOne(body.cep.bairro.nome)
        cep.numero = body.cep.numero;
        cep.bairro = bairro;
        return await Cep.save(cep);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar Cep\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let e = new Cep();
    try {
      e.idcep = body.idCep;
      let busca = await Cep.findOne({ idcep: e.idcep });
      busca.numero = body.nome;
      return await Cep.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar Cep\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  Drop(body: any): Promise<Cep> {
    throw new Error('Method not implemented.');
  }
}
