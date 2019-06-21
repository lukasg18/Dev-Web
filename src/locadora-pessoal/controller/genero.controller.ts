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
import { ApiUseTags, ApiModelProperty, ApiImplicitBody } from '@nestjs/swagger';
import { GeneroService } from '../service/genero.service';

class PostGenero{
  @ApiModelProperty()
  nome:string
  @ApiModelProperty()
  status:number
}

@ApiUseTags('Genero')
@Controller()
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Get('/genero')
  root(): any {
    return this.generoService.readAll();
  }
  
  @Post('/genero')
  @ApiImplicitBody({ name: 'body', required: true, type: PostGenero })
  async createOne(@Res() res, @Body() body: any) {
    try {
      let genero = await this.generoService.Create(body);
      if (genero != undefined) {
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

  @Delete('/genero')
  @ApiImplicitBody({ name: 'body', required: true, type: PostGenero })
  async remove(@Res() res, @Body() body: any) {
    try {
      let genero = await this.generoService.Drop(body);
      console.log(genero)
      if (genero != undefined) {
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
