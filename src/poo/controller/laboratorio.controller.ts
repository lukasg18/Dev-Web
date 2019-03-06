import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { LaboratorioService } from '../service/laboratorio.service';
import { Laboratorio } from '../model/laboratorio.entity';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('poo')
@Controller()
export class LaboratorioController {
  constructor(private readonly laboratorioService: LaboratorioService) {}

  @Get('/laboratorio')
  readAll():any {
    return this.laboratorioService.readAll();
  }

  @Get('/laboratorio/:id')
  readOne(@Param() param ):any {
    return this.laboratorioService.readOne(param.id);
  }

  @Post('/laboratorio')
  Create(@Body() body):any {
    return this.laboratorioService.Create(body);
  }

  @Post('/laboratorio/update')
  public updateOne(@Body() body: Laboratorio) {
    return this.laboratorioService.Update(body);
  }

  @Post('/laboratorio/remover')
  public remover(@Body() body: Laboratorio) {
    return this.laboratorioService.Drop(body)
  }
}
