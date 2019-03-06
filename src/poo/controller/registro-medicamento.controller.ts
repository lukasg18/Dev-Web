import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { RegMedService } from '../service/registro-medicamento.service';
import { RegistroMedicamento } from '../model/registro-medicamento.entity';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('poo')
@Controller()
export class RegistroMedicamentoController {
  constructor(private readonly regmedService: RegMedService) {}

  @Get('/registro-medicamento')
  readAll():any {
    return this.regmedService.readAll();
  }

  @Get('/registro-medicamento/:id')
  readOne(@Param() param ):any {
    return this.regmedService.readOne(param.id);
  }

  @Post('/registro-medicamento')
  Create(@Body() body):any {
    return this.regmedService.Create(body);
  }

  @Post('/registro-medicamento/update')
  public updateOne(@Body() body: RegistroMedicamento) {
    return this.regmedService.Update(body);
  }
}
