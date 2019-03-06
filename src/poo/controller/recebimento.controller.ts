import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { RecebimentoService } from '../service/recebimento.service';
import { Recebimento } from '../model/recebimento.entity';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('poo')
@Controller()
export class RecebimentoController {
  constructor(private readonly recebService: RecebimentoService) {}

  @Get('/recebimento')
  readAll():any {
    return this.recebService.readAll();
  }

  @Get('/recebimento/:id')
  readOne(@Param() param ):any {
    return this.recebService.readOne(param.id);
  }

  @Post('/recebimento')
  Create(@Body() body):any {
    return this.recebService.Create(body);
  }

  @Post('/recebimento/update')
  public updateOne(@Body() body: Recebimento) {
    return this.recebService.Update(body);
  }
}
