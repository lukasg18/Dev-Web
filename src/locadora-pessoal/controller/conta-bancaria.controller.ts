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
  import { ContaBancariaService } from '../service/conta-bancaria.service';

  @ApiUseTags('Conta-Bancaria')
  @Controller()
  export class ContaBancariaController {
    constructor(private readonly contaBancariaService: ContaBancariaService) {}
    @Post('/conta-bancaria')
    async createOne(@Res() res, @Body() body: any) {
      try {
        let conta = await this.contaBancariaService.Create(body);
        if (conta != undefined) {
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
  