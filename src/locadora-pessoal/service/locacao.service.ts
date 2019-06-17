import { Injectable, Inject } from '@nestjs/common';
import { Locacao } from '../model/locacao.entity';
import { Pagarme } from '../gateways/pagarme';

@Injectable()
export class LocacaoService {

  async readAll(): Promise<Locacao[] | any> {
    return Locacao.find();
  }

  async readOne(id: number): Promise<Locacao | any> {
    return Locacao.findOne({ idlocacao: id });
  }

  async Create(body: any): Promise<Locacao | any> {

    try {
      console.log('...');

    } catch (err) {

      throw new Error(
        `Erro ao salvar atedente\n Erro: ${err.name}\n Mensagem: ${
        err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

}
