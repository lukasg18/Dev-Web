import {
  Get,
  Controller,
  Param,
  Post,
  Body,
  Res,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { GeneroService } from '../service/genero.service';
import { JogoService } from '../service/jogo.service';
import { PessoaJogoService } from '../service/pessoa-jogo.service';
@ApiUseTags('pessoa-jogo')
@Controller()
export class PessoaJogoController {
  constructor(private readonly jogoService: JogoService, private readonly pessoajogoService: PessoaJogoService) {}

  @Get('/pessoajogo')
  async readOne(@Res() res) {
    try {
      let jogo = await this.pessoajogoService.readAll()
      if (jogo != undefined) {
        res.status(HttpStatus.OK).send(jogo);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum jogo encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/jogo')
  async createOne(@Res() res, @Body() body: any) {
    try {
      let jogo = await this.jogoService.Create(body);
      if (jogo != undefined) {
        res.status(HttpStatus.OK).send("cadastrado com sucesso!");
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum jogo encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Post('/jogo/remove')
  async remove(@Res() res, @Body() body: any) {
    try {
      let jogo = await this.jogoService.Drop(body);
      console.log(jogo)
      if (jogo != undefined) {
        res.status(HttpStatus.OK).send("cadastrado com sucesso!");
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum jogo encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send("CPF ja cadastrado!");
    }
  }

}