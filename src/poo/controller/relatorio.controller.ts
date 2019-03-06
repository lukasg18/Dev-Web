import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { RelatorioService } from '../service/relatorio.service';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('poo')
@Controller()
export class RelatorioController {
  constructor(private readonly medicamentoService: RelatorioService) {}

  @Get('/relatorio/1')
  async SumMedicamentosEstoque(@Res() res) {
    try {
      let mp: RelatorioService[] = await this.medicamentoService.SumMedicamentosEstoque();
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

  @Get('/relatorio/2')
  async CountMedicamentosEstoque(@Res() res) {
    try {
      let mp: RelatorioService[] = await this.medicamentoService.CountMedicamentosEstoque();
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

  @Get('/relatorio/3')
  async SumQuanntidadeSolicitado(@Res() res) {
    try {
      let mp: RelatorioService[] = await this.medicamentoService.SumQuanntidadeSolicitado();
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

  @Get('/relatorio/4')
  async CountQuanntidadeSolicitado(@Res() res) {
    try {
      let mp: RelatorioService[] = await this.medicamentoService.CountQuanntidadeSolicitado();
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

  @Get('/relatorio/5')
  async MedicamentosParaSolicitacao(@Res() res) {
    try {
      let mp: RelatorioService[] = await this.medicamentoService.MedicamentosParaSolicitacao();
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
