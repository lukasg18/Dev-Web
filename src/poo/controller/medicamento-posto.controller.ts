import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { MedicamentoPostoService } from '../service/medicamento-posto.service';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('poo')
@Controller()
export class MedicamentoPostoController {
  constructor(private readonly MpService: MedicamentoPostoService) {}

  @Get('/mp/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let mp: MedicamentoPostoService[] = await this.MpService.readOne(id.id);
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

  @Get('/mp')
  async readAll(@Res() res) {
    try {
      let mp: MedicamentoPostoService[] = await this.MpService.readAll();
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

  @Post('/mp')
  async Create(@Res() res, @Body() body) {
    try {
      let mp = await this.MpService.Create(body);
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

  @Post('/mp/remover')
  async remove(@Res() res, @Body() body) {
    try {
      let mp = await this.MpService.Drop(body);
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

  @Post('/mp/atualizar')
  async update(@Res() res, @Body() body) {
    try {
      let mp = await this.MpService.Update(body);
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
