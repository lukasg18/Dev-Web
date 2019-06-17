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

  @ApiUseTags('Locacao')
  @Controller()
  export class LocacaoController {
    constructor(private readonly contaBancariaService: LocacaoService) {}
    @Post('/locacao')
    async createOne(@Res() res, @Body() body: any) {
      try {
        console.log("ok");
        
        // let conta = await this.contaBancariaService.Create(body);
        // if (conta != undefined) {
        //   res.status(HttpStatus.OK).send("cadastrado com sucesso!");
        // } else {
        //   res
        //     .status(HttpStatus.NOT_FOUND)
        //     .send('Nenhum jogo encontrado na busca');
        // }
      } catch (err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err);
      }
    }  
  }
  