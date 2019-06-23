import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { BairroService } from '../service/bairro.service';
import { Bairro } from '../model/bairro.entity';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Bairro')
@Controller()
export class BairroController {
  constructor(private readonly bairroService: BairroService) {}

  @Get('/bairro')
  readAll():any {
    return this.bairroService.readAll();
  }
}
