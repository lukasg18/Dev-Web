import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { AtendenteService } from '../service/atendente.service';
import { Atendente } from '../model/atendente.entity';
import { ApiUseTags, ApiModelProperty, ApiImplicitBody } from '@nestjs/swagger';

class PostEstado{
  @ApiModelProperty()
  nome:string
}
class PostMunicipio{
  @ApiModelProperty()
  nome:string
  @ApiModelProperty()
  estado:PostEstado
}

class PostBairro{
  @ApiModelProperty()
  nome:string
  @ApiModelProperty()
  municipio:PostMunicipio
}

class PostCep{
  @ApiModelProperty()
  numero:number
  @ApiModelProperty()
  bairro:PostBairro
}

class PostAtendente {
  @ApiModelProperty()
  cpf: string;
  @ApiModelProperty()
  senha: string;
  @ApiModelProperty()
  email:string
  @ApiModelProperty()
  cep:PostCep
  @ApiModelProperty()
  nomeusuario:string
  @ApiModelProperty()
  datanascimento:string
  @ApiModelProperty()
  sexo:number
  @ApiModelProperty()
  numeroregistro:string
  @ApiModelProperty()
  urlimagem: string;
}
@ApiUseTags('Atendente')
@Controller()
export class AtendenteController {
  constructor(private readonly atendenteService: AtendenteService) {}

  @Get('/atendente/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let atendente: Atendente[] = await this.atendenteService.readOne(id.id);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Get('/atendente')
  async readAll(@Res() res) {
    try {
      let atendente: Atendente[] = await this.atendenteService.readAll();
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/atendente')
  @ApiImplicitBody({ name: 'body', required: true, type: PostAtendente })
  async Create(@Res() res, @Body() body) {
    try {
      let atendente = await this.atendenteService.Create(body);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('erro ao salvar atendente');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }
}
