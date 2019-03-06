import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { EstadoService } from '../service/estado.service';
import { Estado } from '../model/estado.entity';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('poo')
@Controller()
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @Get('/estado')
  readAll():any {
    return this.estadoService.readAll();
  }
 
  @Get('/estado/:id')
  readOne(@Param() param):any {
    return this.estadoService.readOne(param.id);
  }

  @Post('/estado')
  Create(@Body() body):any {
    return this.estadoService.Create(body);
  }

  @Post('/estado/update')
  public updateOne(@Body() body: Estado) {
    return this.estadoService.Update(body);
  }
}
