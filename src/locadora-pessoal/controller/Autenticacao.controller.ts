import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiUseTags, ApiModelProperty, ApiImplicitBody } from '@nestjs/swagger';
import { AutenticacaoService } from '../service/autenticacao.service';

class PostData {
  @ApiModelProperty()
  cpf: string;
  @ApiModelProperty()
  senha: string;
}

@ApiUseTags('Autenticacao')
@Controller()
export class AutenticacaoController {
  constructor(private readonly authService: AutenticacaoService) {}

  @Post('/auth')
  @ApiImplicitBody({ name: 'body', required: true, type: PostData })
  async createOne(@Res() res, @Body() body: any) {
    try {
      let pessoa = await this.authService.ValidaUser(body)
      if (pessoa != undefined) {
        res.status(HttpStatus.OK).send(pessoa);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum usuario encontrado');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }
}
