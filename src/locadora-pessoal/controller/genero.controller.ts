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
import {
  ApiUseTags,
  ApiModelProperty,
  ApiImplicitBody,
  ApiImplicitParam,
  ApiImplicitQuery,
} from '@nestjs/swagger';
import { GeneroService } from '../service/genero.service';

class PostGenero {
  @ApiModelProperty()
  idgenero?: string;
  @ApiModelProperty()
  nome: string;
  @ApiModelProperty()
  status: number;
}

@ApiUseTags('Genero')
@Controller()
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Get('/genero')
  @ApiImplicitQuery({
    name: 'status',
    description: '0 - ativo 1 - inativo',
    required: false,
    type: Number,
  })
  root(@Res() res, @Query() body: any) {
    try {
      let genero =  this.generoService.readAll(body);
      if (genero != undefined) {
        res.status(HttpStatus.OK).send(genero);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Nenhum genero encontrado' });
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Post('/genero')
  @ApiImplicitBody({ name: 'body', required: true, type: PostGenero })
  async createOne(@Res() res, @Body() body: any) {
    try {
      let genero = await this.generoService.Create(body);
      if (genero != undefined) {
        res.status(HttpStatus.OK).send(genero);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Erro ao criar o genero!' });
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Delete('/genero/:idgenero')
  @ApiImplicitParam({
    name: 'idgenero',
    description: 'ID do genero',
    required: true,
    type: Number,
  })
  async remove(@Res() res, @Param() idgenero: any) {
    try {
      let genero = await this.generoService.Drop(idgenero);
      if (genero != undefined) {
        // res.status(HttpStatus.OK).send("Inativado com sucesso!");
        res.status(HttpStatus.OK).json({ message: 'Inativado com sucesso!' });
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Nenhum resultado encontrado!' });
      }
    } catch (err) {
      res
        .status(HttpStatus.BAD_GATEWAY)
        .json({ message: 'cpf ja cadastrado!' });
    }
  }
}
