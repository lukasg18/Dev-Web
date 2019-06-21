import {
  Get,
  Controller,
  Param,
  Post,
  Body,
  Res,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';
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
@ApiUseTags('Pessoa')
@Controller()
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get('/pessoa')
  root(): any {
    return this.pessoaService.readAll();
  }

  @Get('/pessoa/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let pessoa = await this.pessoaService.readOne(id.id);
      if (pessoa != undefined) {
        res.status(HttpStatus.OK).send(pessoa);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/pessoa')
  @ApiImplicitBody({ name: 'body', required: true, type: PostPessoa })
  async createOne(@Res() res, @Body() body: any) {
    try {
      let pessoa = await this.pessoaService.Create(body);
      if (pessoa != undefined) {
        res.status(HttpStatus.OK).send("cadastrado com sucesso!");
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Delete('/pessoa')
  async remove(@Res() res, @Body() body: any) {
    try {
      let pessoa = await this.pessoaService.Drop(body);
      console.log(pessoa)
      if (pessoa != undefined) {
        res.status(HttpStatus.OK).send("cadastrado com sucesso!");
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send("CPF ja cadastrado!");
    }
  }

}
