import { Injectable, Inject } from '@nestjs/common';
import { Bairro } from '../model/bairro.entity';
import { genericInterface } from './interface/generic.interface';
import { MunicipioService } from './municipio.service';
import { Municipio } from '../model/municipio.entity';

@Injectable()
export class BairroService {
  async readAll() {
    return await Bairro.find();
  }

  async readOne(nome: string) {
    return await Bairro.findOne({ nome: nome });
  }

  async Create(body: any) {
    let bairro = new Bairro();
    let municipioService = new MunicipioService();
    let municipio = new Municipio();
    try {
      let busca = await Bairro.findOne({ nome: body.bairro });
      if (busca != undefined) {
        return busca;
      } else {
        municipio = await municipioService.readOne(body.municipio);
        bairro.nome = body.bairro;
        bairro.municipio = municipio;
        return await Bairro.save(bairro);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar bairro\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  Drop(body: any){
    throw new Error('Method not implemented.');
  }

  async Update(body) {
    try {
      let b = new Bairro();
      b.idbairro = body.idbairro;
      let busca = await Bairro.findOne({ idbairro: b.idbairro });
      busca.nome = body.nome;
      return await Bairro.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao remover bairro\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
