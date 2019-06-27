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
import { JogoService } from '../service/jogo.service';

class PostPlataforma{
  @ApiModelProperty()
  nome:string
  @ApiModelProperty()
  status:number
}

class PostGenero{
  @ApiModelProperty()
  numero:number
  @ApiModelProperty()
  status:number
}

class PostJogo {
  @ApiModelProperty()
  idjogo?: string;
  @ApiModelProperty()
  nome: string;
  @ApiModelProperty()
  urlimagem: string;
  @ApiModelProperty()
  anolancamento:string
  @ApiModelProperty()
  descricao:string
  @ApiModelProperty()
  classificacao:string
  @ApiModelProperty()
  multiplayer:boolean
  @ApiModelProperty()
  produtora:string
  @ApiModelProperty()
  genero:[PostGenero]
  @ApiModelProperty()
  plataforma:PostPlataforma[]
  @ApiModelProperty()
  status:number
}
@ApiUseTags('Jogo')
@Controller()
export class JogoController {
  constructor(private readonly jogoService: JogoService) {}

  @Get('/jogo')
  @ApiImplicitQuery({
    name: 'jogo',
    description: 'nome do jogo',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'genero',
    description: 'nome do genero',
    required: false,
    type: String,
  })
  @ApiImplicitQuery({
    name: 'plataforma',
    description: 'nome da plataforma',
    required: false,
    type: String,
  })
  async readOne(@Res() res, @Query() query) {
    try {
      let jogo = await this.jogoService.searchByFull(query)
      if (jogo != undefined) {
        res.status(HttpStatus.OK).send(jogo);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum jogo encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/jogo')
  @ApiImplicitBody({ name: 'body', required: true, type: PostJogo })
  async createOne(@Res() res, @Body() body: any) {
    try {
      let jogo = await this.jogoService.Create(body);
      if (jogo != undefined) {
        res.status(HttpStatus.OK).json({"message":"Cadastrado com sucesso!"});
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"erro ao salvar o jogo!"});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Delete('/jogo/:idjogo')
  @ApiImplicitParam({
    name: 'idjogo',
    description: 'ID do jogo',
    required: true,
    type: Number,
  })
  async remove(@Res() res, @Param() idjogo: any) {
    try {
      let jogo = await this.jogoService.Drop(idjogo);
      if (jogo != undefined) {
        // res.status(HttpStatus.OK).send("Inativado com sucesso!");
        res.status(HttpStatus.OK).json({"message":"Inativado com sucesso!"});
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum jogo encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send("CPF ja cadastrado!");
    }
  }

}
