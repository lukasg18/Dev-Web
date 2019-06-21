import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { EstadoService } from '../service/estado.service';
import { Estado } from '../model/estado.entity';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Estado')
@Controller()
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @Get('/estado')
  readAll():any {
    return this.estadoService.readAll();
  }
 
}
