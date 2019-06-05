import { Injectable, Inject } from '@nestjs/common';
import { Municipio } from '../model/municipio.entity';
import { Estado } from '../model/estado.entity';
import { EstadoService } from './estado.service';

@Injectable()
export class MunicipioService {
  async readAll() {
    return await Municipio.find();
  }

  async readOne(nome: string){
    return await Municipio.findOne({ nome: nome });
  }
  async Create(body: any) {
    let municipio = new Municipio();
    let estadoService = new EstadoService();
    let estado = new Estado();
    try {
      let busca = await Municipio.findOne({ nome: body.cep.bairro.municipio.nome });
      if (busca != undefined) {
        return busca;
      } else {
        estado = await estadoService.readOne(body.cep.bairro.municipio.estado.nome)
        municipio.nome = body.cep.bairro.municipio.nome;
        municipio.estado = estado
        return await Municipio.save(municipio);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar municipio\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let m = new Municipio();
    try {
      m.idmunicipio = body.idmunicipio;
      let busca = await Municipio.findOne({ idmunicipio: m.idmunicipio });
      busca.nome = body.nome;
      return await Municipio.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar municipio\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  Drop(body: any): Promise<Municipio> {
    throw new Error('Method not implemented.');
  }
}
