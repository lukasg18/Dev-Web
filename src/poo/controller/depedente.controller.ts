import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { DependenteService } from '../service/depedente.service';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('poo')
@Controller()
export class DependenteController {
  constructor(private readonly depedenteService: DependenteService) {}

  @Get('/dependente/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let depedente: DependenteService[] = await this.depedenteService.readOne(id.id);
      if (depedente != undefined) {
        res.status(HttpStatus.OK).send(depedente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum dependente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Get('/dependente')
  async readAll(@Res() res) {
    try {
      let depedente: DependenteService[] = await this.depedenteService.readAll();
      if (depedente != undefined) {
        res.status(HttpStatus.OK).send(depedente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum dependente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/dependente')
  async Create(@Res() res, @Body() body) {
    try {
      let depedente = await this.depedenteService.Create(body);
      if (depedente != undefined) {
        res.status(HttpStatus.OK).send(depedente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum dependente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/dependente/remover')
  async remove(@Res() res, @Body() body) {
    try {
      let depedente = await this.depedenteService.Drop(body);
      if (depedente != undefined) {
        res.status(HttpStatus.OK).send(depedente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum dependente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/dependente/atualizar')
  async update(@Res() res, @Body() body) {
    try {
      let depedente = await this.depedenteService.Update(body);
      if (depedente != undefined) {
        res.status(HttpStatus.OK).send(depedente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum dependente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }
}
