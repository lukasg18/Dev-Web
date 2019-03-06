import { Injectable, Inject } from '@nestjs/common';
import { Atendente } from '../model/atendente.entity';
import { IAtendente } from './interface/atendente.interface';

@Injectable()
export class AtendenteService implements IAtendente {
  async ValidaUser(body: any) {
    let atendente = new Atendente();
    let buscaPessoa;
    let buscaAtendente;
    try {
      atendente.numeroregistro = body.numeroregistro;
      buscaAtendente = await Atendente.findOne({numeroregistro: atendente.numeroregistro});
      if(buscaAtendente == undefined){
        return {"numeroregistro": false, "rg": false};
      }else{
        buscaPessoa = buscaAtendente.pessoa;
        if(buscaPessoa.rg == body.rg){
          return {"numeroregistro": true, "rg": true};
        }else{
          return {"numeroregistro": true, "rg": false};
        }
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar atedente\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  buscaRegistro(numeroregistro): Promise<Atendente | any> {
    return Atendente.findOne({ numeroregistro: numeroregistro });
  }

  async readAll(): Promise<Atendente[] | any> {
    return Atendente.find();
  }

  async readOne(id: number): Promise<Atendente | any> {
    return Atendente.findOne({ idpessoa: id });
  }

  async Create(body: any): Promise<Atendente> {
    let atendente = new Atendente();
    try {
      atendente.numeroregistro = body.numeroregistro;
      atendente.idpessoa = body.idpessoa;
      atendente.posto = body.idposto;
      return await Atendente.save(atendente);
    } catch (err) {
      throw new Error(
        `Erro ao salvar atedente\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Drop(body: any): Promise<Atendente> {
    let atedente = new Atendente();
    let busca;
    atedente.numeroregistro = body.numeroregistro;
    try {
      busca = await Atendente.findOne({
        numeroregistro: atedente.numeroregistro,
      });
      return await Atendente.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao deletar atedente\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any): Promise<Atendente> {
    let busca;
    try {
      let busca = await Atendente.findOne({ numeroregistro: body.antigoregistro });
      busca.numeroregistro = body.novoregistro
      return await Atendente.save(busca);
    } catch (err) {
      throw new Error(
        `Erro ao atualizar atedente\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
