import { Module } from '@nestjs/common';
import { PooModule } from './poo/poo.module';
@Module({
  imports: [PooModule]
})
export class AppModule {}
