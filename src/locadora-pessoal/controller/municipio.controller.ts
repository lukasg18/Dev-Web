import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { MunicipioService } from '../service/municipio.service';
import { Municipio } from '../model/municipio.entity';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Municipio')
@Controller()
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) {}

  @Get('/municipio')
  readAll():any {
    return this.municipioService.readAll();
  }

  @Get('/municipio/:id')
  readOne(@Param() param ):any {
    return this.municipioService.readOne(param.id);
  }
}
