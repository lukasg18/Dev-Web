import { Injectable, Inject } from '@nestjs/common';
import { Municipio } from '../model/municipio.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class MunicipioService implements genericInterface<Municipio> {
  async readAll() {
    return await Municipio.find();
  }

  async readOne(id: number) {
    return await Municipio.findOne({ idmunicipio: id });
  }
  async Create(body: any) {
    let municipio = new Municipio();
    try {
      municipio.nome = body.nome;
      municipio.estado = body.idestado;
      return await Municipio.save(municipio);
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
