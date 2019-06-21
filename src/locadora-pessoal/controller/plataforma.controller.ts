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
import { PlataformaService } from '../service/plataforma.service';

class PostPlataforma{
  @ApiModelProperty()
  nome:string
}

@ApiUseTags('Plataforma')
@Controller()
export class PlataformaController {
  constructor(private readonly plataformaService: PlataformaService) {}

  @Get('/plataforma')
  root(): any {
    return this.plataformaService.readAll();
  }

  @Post('/plataforma')
  @ApiImplicitBody({ name: 'body', required: true, type: PostPlataforma })
  async createOne(@Res() res, @Body() body: any) {
    try {
      let plataforma = await this.plataformaService.Create(body);
      if (plataforma != undefined) {
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

  @Delete('/plataforma')
  @ApiImplicitBody({ name: 'body', required: true, type: PostPlataforma })
  async remove(@Res() res, @Body() body: any) {
    try {
      let plataforma = await this.plataformaService.Drop(body);
      console.log(plataforma)
      if (plataforma != undefined) {
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
