import {
    Get,
    Controller,
    Param,
    Post,
    Body,
    Res,
    HttpStatus,
    Query,
  } from '@nestjs/common';
  import { ApiUseTags } from '@nestjs/swagger';
  import { LocacaoService } from '../service/locacao.service';
  import { PagamentoService } from '../service/pagamento.service';

  @ApiUseTags('Locacao')
  @Controller()
  export class LocacaoController {
    constructor(private readonly locacaoService: LocacaoService, private readonly pagamentoService: PagamentoService) {}
    @Post('/locacao')
    async createOne(@Res() res, @Body() body: any) {
      try {
        const locacao = await this.locacaoService.Create(body);

        if (!locacao) {
          res
            .status(HttpStatus.NOT_FOUND)
            .send('Não foi possível cadastrar');
        }
        const pagamento = this.pagamentoService.Create({tipo: 1 , modelo: locacao})
        


        if (locacao != undefined) {
          res.status(HttpStatus.OK).send("cadastrado com sucesso!");
        } else {
          res
            .status(HttpStatus.NOT_FOUND)
            .send('Nenhum jogo encontrado na busca');
        }
      } catch (err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err);
      }
    }  
  }
  