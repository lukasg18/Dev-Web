import { Module } from '@nestjs/common';
import { LocadoraPessoalModule } from './locadora-pessoal/locadora-pessoal.module';
@Module({
  imports: [LocadoraPessoalModule]
})
export class AppModule {}
