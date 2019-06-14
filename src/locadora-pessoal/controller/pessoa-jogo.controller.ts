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
import {
  ApiUseTags,
  ApiImplicitParam,
  ApiImplicitQuery,
} from '@nestjs/swagger';
import { PessoaJogoService } from '../service/pessoa-jogo.service';
@ApiUseTags('pessoa-jogo')
@Controller()
export class PessoaJogoController {
  constructor(private readonly pessoajogoService: PessoaJogoService) {}

  @Get('/pessoajogo')
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
  @ApiImplicitQuery({
    name: 'pessoajogo',
    description: 'campo true ou false para mostrar jogos disponiveis',
    required: false,
    type: Boolean,
  })
  @ApiImplicitQuery({
    name: 'bairro',
    description: 'nome do bairro',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'municipio',
    description: 'nome do municipio',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'estado',
    description: 'nome do estado',
    required: false,
    type: String,
  })
  async readAll(@Res() res, @Query() query) {
    try {
      let jogo = await this.pessoajogoService.searchByFull(query);
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

  @Get('/pessoajogo/:idpessoa')
  @ApiImplicitParam({
    name: 'idpessoa',
    description: 'id da pessoa',
    required: true,
    type: Number,
  })
  async readOne(@Res() res, @Param() idpessoa) {
    try {
      let jogo = await this.pessoajogoService.searchById(idpessoa);
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

  @Post('/pessoajogo')
  async createOne(@Res() res, @Body() body: any) {
    try {
      let jogo = await this.pessoajogoService.Create(body);
      if (jogo != undefined) {
        res.status(HttpStatus.OK).send('cadastrado com sucesso!');
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum jogo encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Post('/pessoajogo/remove')
  async remove(@Res() res, @Body() body: any) {
    try {
      let jogo = await this.pessoajogoService.Drop(body);
      console.log(jogo);
      if (jogo != undefined) {
        res.status(HttpStatus.OK).send('cadastrado com sucesso!');
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum jogo encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send('CPF ja cadastrado!');
    }
  }
}
