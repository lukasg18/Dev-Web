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
        const {idcartao, metodoPagamento, ...dadosLocacao} = body

        const locacao = await this.locacaoService.Create(dadosLocacao);

        if (!locacao) {
          res
            .status(HttpStatus.NOT_FOUND)
            .send('Não foi possível cadastrar');
        }
        const pagamento = this.pagamentoService.Create({
          tipo: 1, 
          idcartao, 
          metodoPagamento,
          modelo: locacao
        })
        
        if (pagamento) {
          res.status(HttpStatus.OK).send("cadastrado com sucesso!");
        } else {
          res
            .status(HttpStatus.NOT_FOUND)
            .send('Não foi possível realizar o pagamento');
        }
      } catch (err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err);
      }
    }  
  }
  