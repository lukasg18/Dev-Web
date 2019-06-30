import {
  Get,
  Controller,
  Param,
  Post,
  Body,
  Res,
  HttpStatus,
  Delete,
  Query,
} from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';
import { ApiUseTags, ApiModelProperty, ApiImplicitBody, ApiImplicitQuery, ApiImplicitParam } from '@nestjs/swagger';

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
  idpessoa?:number
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
  @ApiModelProperty()
  status: string;
}
@ApiUseTags('Pessoa')
@Controller()
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get('/pessoa')
  @ApiImplicitQuery({
    name: 'status',
    description: 'status da pessoa no sistema (0 = ativo ou 1 = inativo)',
    required: false,
    type: Number,
  })
  @ApiImplicitQuery({
    name: 'bairro',
    description: 'nome do bairro',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'municipio',
    description: 'nome do municipio',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'estado',
    description: 'nome do estado',
    required: false,
    type: String,
  })
  async readOne(@Res() res, @Query() query) {
    try {
      let jogo = await this.pessoaService.readAll(query)
      if (jogo != undefined) {
        res.status(HttpStatus.OK).send(jogo);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhuma pessoa encontrada!"});
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
        res.status(HttpStatus.OK).json({"message":"Cadastrado com sucesso!"});
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhuma pessoa encontrada!"});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Delete('/pessoa/:idpessoa')
  @ApiImplicitParam({
    name: 'idpessoa',
    description: 'ID da pessoa',
    required: true,
    type: Number,
  })
  async remove(@Res() res, @Param() idpessoa: any) {
    try {
      let pessoa = await this.pessoaService.Drop(idpessoa);
      if (pessoa != undefined) {
        // res.status(HttpStatus.OK).send(JSON.parse('{"message":"Inativado com sucesso!"}'));
        res.status(HttpStatus.OK).json({"message":"Inativado com sucesso!"});
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":'Nenhuma pessoa encontrado na busca'});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }


  @Get('/pessoa/:idpessoa')
  @ApiImplicitParam({
    name: 'idpessoa',
    description: 'id da pessoa',
    required: true,
    type: Number,
  })
  async readPessoa(@Res() res, @Param() idpessoa) {
    try {
      let jogo = await this.pessoaService.readOne(idpessoa.idpessoa)
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
