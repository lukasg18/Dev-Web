import { Controller, Post, Body, Res, HttpStatus, Param, Get } from '@nestjs/common';
import { ApiUseTags, ApiImplicitParam } from '@nestjs/swagger';
import { LocacaoService } from '../service/locacao.service';
import { PagamentoService } from '../service/pagamento.service';

@ApiUseTags('Locacao')
@Controller()
export class LocacaoController {
  constructor(
    private readonly locacaoService: LocacaoService,
    private readonly pagamentoService: PagamentoService,
  ) {}
  @Post('/locacao')
  async createOne(@Res() res, @Body() body: any) {
    try {
      const { idcartao, metodoPagamento, ...dadosLocacao } = body;

      const locacao = await this.locacaoService.Create(dadosLocacao);

      if (!locacao) {
        res.status(HttpStatus.NOT_FOUND).send('Não foi possível cadastrar');
      }
      const pagamento = this.pagamentoService.Create({
        tipo: 1,
        idcartao,
        metodoPagamento,
        modelo: locacao,
      });

      if (pagamento) {
        res.status(HttpStatus.OK).send('cadastrado com sucesso!');
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Não foi possível realizar o pagamento');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Get('/locacao/:idpessoa')
  @ApiImplicitParam({
    name: 'idpessoa',
    description: 'id da pessoa',
    required: true,
    type: Number,
  })
  async readOne(@Res() res, @Param() idpessoa) {
    try {
      let jogo = await this.locacaoService.readUser(idpessoa.idpessoa)
      if (jogo != undefined) {
        res.status(HttpStatus.OK).send(jogo);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Nenhum resultado encontrado!' });
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }
}
