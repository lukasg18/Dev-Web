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
import { ApiUseTags, ApiImplicitQuery } from '@nestjs/swagger';
import { GeneroService } from '../service/genero.service';
import { JogoService } from '../service/jogo.service';
@ApiUseTags('Jogo')
@Controller()
export class JogoController {
  constructor(private readonly jogoService: JogoService) {}

  @Get('/jogo')
  @ApiImplicitQuery({
    name: 'jogo',
    description: 'nome do jogo',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'genero',
    description: 'nome do genero',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'plataforma',
    description: 'nome da plataforma',
    required: false,
    type: String,
  })
  async readOne(@Res() res, @Query() query) {
    try {
      let jogo = await this.jogoService.searchByFull(query)
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
