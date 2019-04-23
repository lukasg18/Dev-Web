import {
  Get,
  Controller,
  Param,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';
import { Pessoa } from '../model/pessoa.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { AutenticacaoService } from '../service/autenticacao.service';
@ApiUseTags('Autenticacao')
@Controller()
export class AutenticacaoController {
  constructor(private readonly authService: AutenticacaoService) {}

  @Post('/auth')
  async createOne(@Res() res, @Body() body: any) {
    try {
      let pessoa = await this.authService.ValidaUser(body)
      if (pessoa != undefined) {
        res.status(HttpStatus.OK).send(pessoa);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }


}
