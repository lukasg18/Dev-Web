import { Injectable, Inject } from '@nestjs/common';
import { Plataforma, statusEnum } from '../model/plataforma.entity';

@Injectable()
export class PlataformaService {
  async readAll() {
    return await Plataforma.find();
  }

  async readOne(nome: string) {
    return await Plataforma.findOne({ nome: nome });
  }

  async Create(body: any) {
    let plataforma = new Plataforma();
    try {
      let busca = await Plataforma.findOne({ idplataforma: body.idplataforma });
      if (busca != undefined) {
        return this.Update(body, busca)
      } else {
        plataforma.nome = body.nome;
        plataforma.urlimagem = body.nome;
        plataforma.status = 0;
        return await Plataforma.save(plataforma);
      }
    } catch (err) {
      throw new Error(
        `Erro ao criar plataforma\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body, busca) {
    try {
      busca.nome = body.nome;
      busca.urlimagem = body.urlimagem;
      busca.status = body.status;
      return await Plataforma.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar plataforma\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any){
    let busca = new Plataforma();
    try {
      busca = await Plataforma.findOne({ idplataforma: body.idplataforma });
      busca.status = statusEnum.inativo;
      return await Plataforma.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao inativar Plataforma\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
