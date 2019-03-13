import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { AtendenteService } from '../service/atendente.service';
import { Atendente } from '../model/atendente.entity';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('poo')
@Controller()
export class AtendenteController {
  constructor(private readonly atendenteService: AtendenteService) {}

  @Get('/atendente/registro/:registro')
  async buscaCPF(@Res() res, @Param() numeroregistro) {
    try {
      let atendente: Atendente[] = await this.atendenteService.buscaRegistro(
        numeroregistro.registro,
      );
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Get('/atendente/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let atendente: Atendente[] = await this.atendenteService.readOne(id.id);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Get('/atendente')
  async readAll(@Res() res) {
    try {
      let atendente: Atendente[] = await this.atendenteService.readAll();
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/atendente')
  async Create(@Res() res, @Body() body) {
    try {
      let atendente = await this.atendenteService.Create(body);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/atendente/validar')
  async valida(@Res() res, @Body() body) {
    try {
      let atendente = await this.atendenteService.ValidaUser(body);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/atendente/remover')
  async remove(@Res() res, @Body() body) {
    try {
      let atendente = await this.atendenteService.Drop(body);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/atendente/atualizar')
  async update(@Res() res, @Body() body) {
    try {
      let atendente = await this.atendenteService.Update(body);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }
}
