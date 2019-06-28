import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiUseTags, ApiModelProperty, ApiImplicitBody } from '@nestjs/swagger';
import { AutenticacaoService } from '../service/autenticacao.service';

class PostAuth {
  @ApiModelProperty()
  cpf: string;
  @ApiModelProperty()
  senha: string;
}

class PostAuthEmail {
  @ApiModelProperty()
  email: string;
}

@ApiUseTags('Autenticacao')
@Controller()
export class AutenticacaoController {
  constructor(private readonly authService: AutenticacaoService) {}

  @Post('/auth')
  @ApiImplicitBody({ name: 'body', required: true, type: PostAuth })
  async createOne(@Res() res, @Body() body: any) {
    try {
      let pessoa = await this.authService.ValidaUser(body)
      if (pessoa != undefined) {
        res.status(HttpStatus.OK).send(pessoa);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhum resultado encontrado!"});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Post('/auth/email')
  @ApiImplicitBody({ name: 'body', required: true, type: PostAuthEmail })
  async getEmail(@Res() res, @Body() body: any) {
    try {
      let pessoa = await this.authService.SearchByEmail(body)
      if (pessoa != undefined) {
        res.status(HttpStatus.OK).send(pessoa);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhum resultado encontrado!"});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }
}
