import { Get, Controller, Res, HttpStatus, Param, Body, Post } from '@nestjs/common';
import { TitularService } from '../service/titular.service';
import { Titular } from '../model/titular.entity';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('poo')
@Controller()
export class TitularController {
  constructor(private readonly titularService: TitularService) {}

  @Get('/titular')
  root():any {
    return this.titularService.readAll();
  }

  @Get('/titular/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let pessoa: TitularService[] = await this.titularService.readOne(id.id);
      if (pessoa != undefined) {
        res.status(HttpStatus.OK).send(pessoa);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/titular/')
  async Create(@Res() res, @Body() body) {
    try {
      let pessoa = await this.titularService.Create(body);
      if (pessoa != undefined) {
        res.status(HttpStatus.OK).send(pessoa);
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
