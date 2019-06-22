import { Injectable, Inject, Next } from '@nestjs/common';
import { Pessoa } from '../model/pessoa.entity';
import { Autenticacao } from '../model/autenticacao.entity';
import { PessoaService } from './pessoa.service';
import * as bcrypt from 'bcrypt';
import { Atendente } from '../model/atendente.entity';
import { AtendenteService } from './atendente.service';

@Injectable()
export class AutenticacaoService {
  saltRounds = 10;

  async ValidaUser(body: any) {
    let busca = new Autenticacao();
    let pessoa = new Pessoa();
    let atendente = new Atendente();
    let atendenteservice = new AtendenteService();
    let pessoaService = new PessoaService();
    let senha: any;
    try {
      pessoa = await pessoaService.readOne(body.cpf);
      if (pessoa != undefined) {
        atendente = await atendenteservice.readOne(pessoa.idpessoa);
        busca = await Autenticacao.findOne({ idpessoa: pessoa.idpessoa });
        senha = bcrypt.compareSync(body.senha, busca.senha);
        if (atendente != undefined) {
          if (senha) {
            return atendente;
          } else {
            return 'Senha incorreta';
          }
        }
        if (atendente == undefined) {
          if (senha) {
            return pessoa;
          } else {
            return 'Senha incorreta';
          }
        } else {
          return 'nome de usuario incorreto';
        }
      }
    } catch (err) {
      throw new Error(
        `Erro ao validar usuario\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Create(body: any) {
    let auth = new Autenticacao();
    let busca = new Autenticacao();
    let pessoaService = new PessoaService();
    let pessoa = new Pessoa();
    try {
      pessoa = await pessoaService.readOne(body.cpf);
      busca = await Autenticacao.findOne({ idpessoa: pessoa.idpessoa });
      if (busca != undefined) {
        return busca;
      } else {
        auth.idpessoa = pessoa.idpessoa;
        auth.senha = await bcrypt.hashSync(body.senha, this.saltRounds);
        return await Autenticacao.save(auth);
      }
    } catch (err) {
      throw new Error(
        `Erro ao verificar usuario\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body: any, auth: Autenticacao) {
    let pessoaService = new PessoaService();
    let pessoa = new Pessoa();
    try {
      pessoa = await pessoaService.readOne(body.cpf);
      auth.idpessoa = pessoa.idpessoa;
      auth.senha = await bcrypt.hashSync(body.senha, this.saltRounds);
      return await Autenticacao.save(auth);
    } catch (err) {
      throw new Error(
        `Erro ao verificar usuario\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
}
