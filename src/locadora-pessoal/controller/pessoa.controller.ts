import { Get, Controller, Param, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';
import { Pessoa } from '../model/pessoa.entity';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('poo')
@Controller()
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get('/pessoa')
  root(): any {
    return this.pessoaService.readAll();
  }

  @Get('/pessoa/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let pessoa: Pessoa[] = await this.pessoaService.readOne(id.id);
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

  @Post('/pessoa')
  public createOne(@Body() body: any) {
    return this.pessoaService.Create(body);
  }
}
