import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { PostoService } from '../service/posto.service';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('poo')
@Controller()
export class PostoController {
  constructor(private readonly postoService: PostoService) {}

  @Get('/posto/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let mp: PostoService[] = await this.postoService.readOne(id.id);
      if (mp != undefined) {
        res.status(HttpStatus.OK).send(mp);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum mp encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Get('/posto')
  async readAll(@Res() res) {
    try {
      let mp: PostoService[] = await this.postoService.readAll();
      if (mp != undefined) {
        res.status(HttpStatus.OK).send(mp);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum mp encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/posto')
  async Create(@Res() res, @Body() body) {
    try {
      let mp = await this.postoService.Create(body);
      if (mp != undefined) {
        res.status(HttpStatus.OK).send(mp);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum mp encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/posto/remover')
  async remove(@Res() res, @Body() body) {
    try {
      let mp = await this.postoService.Drop(body);
      if (mp != undefined) {
        res.status(HttpStatus.OK).send(mp);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum mp encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/posto/atualizar')
  async update(@Res() res, @Body() body) {
    try {
      let mp = await this.postoService.Update(body);
      if (mp != undefined) {
        res.status(HttpStatus.OK).send(mp);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum mp encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }
}
