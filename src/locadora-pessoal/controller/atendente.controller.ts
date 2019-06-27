import {
  Get,
  Controller,
  Res,
  HttpStatus,
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

class PostPessoa {
  @ApiModelProperty()
  idpessoa: number;
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
  urlimagem: string;
  @ApiModelProperty()
  status: string;
}

class PostAtendente{
  @ApiModelProperty()
  numeroregistro:string
  @ApiModelProperty()
  pessoa:PostPessoa
}

@ApiUseTags('Atendente')
@Controller()
export class AtendenteController {
  constructor(private readonly atendenteService: AtendenteService) {}


  @Get('/atendente')
  async readAll(@Res() res) {
    try {
      let atendente: Atendente[] = await this.atendenteService.readAll();
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhum atendente encontrada!"});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/atendente')
  // @ApiImplicitBody({ name: 'body', required: true, type: PostAtendente })
  async Create(@Res() res, @Body() body) {
    try {
      let atendente = await this.atendenteService.Create(body);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhum atendente encontrada!"});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }
}
