import {
  Get,
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiUseTags, ApiImplicitQuery, ApiModelProperty, ApiImplicitBody, ApiImplicitParam } from '@nestjs/swagger';
import { RecomendacaoService } from '../service/recomendacao.service';


@ApiUseTags('Recomendacao')
@Controller()
export class RecomendacaoController {
  constructor(private readonly recomendacaoService: RecomendacaoService) {}

  @Get('/recomendacao/:idpessoa')
  @ApiImplicitParam({
    name: 'idpessoa',
    description: 'passar um id de pessoa',
    required: false,
    type: Number,
  })
  async readOne(@Res() res, @Param() query) {
    try {
      let jogo = await this.recomendacaoService.getTopGames(query);
      if (jogo != undefined) {
        res.status(HttpStatus.OK).send(jogo);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhum resultado encontrado!"});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }
}
