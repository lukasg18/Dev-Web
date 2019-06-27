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
import { ApiUseTags, ApiModelProperty, ApiImplicitBody, ApiImplicitParam } from '@nestjs/swagger';
import { PlataformaService } from '../service/plataforma.service';

class PostPlataforma{
  @ApiModelProperty()
  idplataforma?:number
  @ApiModelProperty()
  nome:string
  @ApiModelProperty()
  status:number
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
        res.status(HttpStatus.OK).json({"message":"Cdastrado com sucesso!"});
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhuuma plataforma encontrada!"});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Delete('/plataforma/:idplataforma')
  @ApiImplicitParam({
    name: 'idplataforma',
    description: 'ID da plataforma',
    required: true,
    type: Number,
  })
  async remove(@Res() res, @Param() idplataforma: any) {
    try {
      let plataforma = await this.plataformaService.Drop(idplataforma);
      if (plataforma != undefined) {
        // res.status(HttpStatus.OK).send("Inativado com sucesso!");
        res.status(HttpStatus.OK).json({"message":"Inativado com sucesso!"});
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhuma plataforma encontrada!"});
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).json({"message":"Plataforma ja cadastrada"});
    }
  }

}
