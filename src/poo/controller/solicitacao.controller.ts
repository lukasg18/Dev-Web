import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
  UseInterceptors,
  CacheInterceptor
} from '@nestjs/common';
import { SolicitacaoService } from '../service/solicitacao.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Solicitacao } from '../model/solicitacao.entity';
@ApiUseTags('poo')
@Controller()
@UseInterceptors(CacheInterceptor)
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}
  @Get('/solicitacao/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let solicitacao: Solicitacao[] = await this.solicitacaoService.readOne(id.id);
      if (solicitacao != undefined) {
        res.status(HttpStatus.OK).send(solicitacao);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum solicitacao encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Get('/solicitacao/page/:id')
  async readAll(@Res() res, @Param() id) {
    try {
      let solicitacao: Solicitacao[] = await this.solicitacaoService.readAll(id.id);
      if (solicitacao != undefined) {
        res.status(HttpStatus.OK).send(solicitacao);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum solicitacao encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/solicitacao')
  async Create(@Res() res, @Body() body) {
    try {
      let solicitacao = await this.solicitacaoService.Create(body);
      if (solicitacao != undefined) {
        res.status(HttpStatus.OK).send(solicitacao);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum solicitacao encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/solicitacao/remover')
  async remove(@Res() res, @Body() body) {
    try {
      let solicitacao = await this.solicitacaoService.Drop(body);
      if (solicitacao != undefined) {
        res.status(HttpStatus.OK).send(solicitacao);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum solicitacao encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Post('/solicitacao/atualizar')
  async update(@Res() res, @Body() body) {
    try {
      let solicitacao = await this.solicitacaoService.Update(body);
      if (solicitacao != undefined) {
        res.status(HttpStatus.OK).send(solicitacao);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum solicitacao encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

}
