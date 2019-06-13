import { Injectable, Inject } from '@nestjs/common';
import { Jogo } from '../model/jogo.entity';
import { PessoaJogo } from '../model/pessoa_jogo.entity';

@Injectable()
export class PessoaJogoService {
  async Create(body: any): Promise<PessoaJogo | any> {
    let pessoaJogo = new PessoaJogo();
    let busca: PessoaJogo;
    try {
      busca = await PessoaJogo.findOne({
        where: { idpessoa: body.pessoa, idjogo: body.jogo },
      });
      if (busca != undefined) {
        return busca;
      } else {
        console.log("entrei")
        pessoaJogo.idjogo = body.jogo;
        pessoaJogo.idpessoa = body.pessoa;
        pessoaJogo.preco = body.preco;
        pessoaJogo.vitrine = true;
        return await PessoaJogo.save(pessoaJogo);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar Jogo\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    throw new Error('Method not implemented.');
  }

  Drop(body: any): Promise<Jogo> {
    throw new Error('Method not implemented.');
  }
}
