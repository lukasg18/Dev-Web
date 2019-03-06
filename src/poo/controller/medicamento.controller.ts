import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { MedicamentoService } from '../service/medicamento.service';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('poo')
@Controller()
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) {}

  @Get('/medicamento/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let mp: MedicamentoService[] = await this.medicamentoService.readOne(id.id);
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

  @Get('/medicamento')
  async readAll(@Res() res) {
    try {
      let mp: MedicamentoService[] = await this.medicamentoService.readAll();
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

  @Post('/medicamento')
  async Create(@Res() res, @Body() body) {
    try {
      let mp = await this.medicamentoService.Create(body);
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

  @Post('/medicamento/remover')
  async remove(@Res() res, @Body() body) {
    try {
      let mp = await this.medicamentoService.Drop(body);
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

  @Post('/medicamento/atualizar')
  async update(@Res() res, @Body() body) {
    try {
      let mp = await this.medicamentoService.Update(body);
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
