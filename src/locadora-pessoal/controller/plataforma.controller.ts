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
import { PlataformaService } from '../service/plataforma.service';
@ApiUseTags('Plataforma')
@Controller()
export class PlataformaController {
  constructor(private readonly plataformaService: PlataformaService) {}

  @Get('/plataforma')
  root(): any {
    return this.plataformaService.readAll();
  }

  @Get('/plataforma/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let plataforma = await this.plataformaService.readOne(id.id);
      if (plataforma != undefined) {
        res.status(HttpStatus.OK).send(plataforma);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/plataforma')
  async createOne(@Res() res, @Body() body: any) {
    try {
      let plataforma = await this.plataformaService.Create(body);
      if (plataforma != undefined) {
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

  @Post('/plataforma/remove')
  async remove(@Res() res, @Body() body: any) {
    try {
      let plataforma = await this.plataformaService.Drop(body);
      console.log(plataforma)
      if (plataforma != undefined) {
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
