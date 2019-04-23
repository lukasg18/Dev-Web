import {
  Get,
  Controller,
  Param,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { GeneroService } from '../service/genero.service';
@ApiUseTags('Genero')
@Controller()
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Get('/genero')
  root(): any {
    return this.generoService.readAll();
  }

  @Get('/genero/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let genero = await this.generoService.readOne(id.id);
      if (genero != undefined) {
        res.status(HttpStatus.OK).send(genero);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/genero')
  async createOne(@Res() res, @Body() body: any) {
    try {
      let genero = await this.generoService.Create(body);
      if (genero != undefined) {
        res.status(HttpStatus.OK).send("cadastrado com sucesso!");
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Post('/genero/remove')
  async remove(@Res() res, @Body() body: any) {
    try {
      let genero = await this.generoService.Drop(body);
      console.log(genero)
      if (genero != undefined) {
        res.status(HttpStatus.OK).send("cadastrado com sucesso!");
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send("CPF ja cadastrado!");
    }
  }

}
