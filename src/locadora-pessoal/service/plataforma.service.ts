import { Injectable, Inject } from '@nestjs/common';
import { Plataforma } from '../model/plataforma.entity';

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
      let busca = await Plataforma.findOne({ nome: body.nome });
      if (busca != undefined) {
        return busca;
      } else {
        plataforma.nome = body.nome;
        plataforma.urlimagem = body.nome
        return await Plataforma.save(plataforma);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar plataforma\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let e = new Plataforma();
    try {
      e.idplataforma = body.idplataforma;
      let busca = await Plataforma.findOne({ idplataforma: e.idplataforma });
      busca.nome = body.nome;
      return await Plataforma.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao verificar plataforma\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  Drop(body: any): Promise<Plataforma> {
    throw new Error('Method not implemented.');
  }
}
