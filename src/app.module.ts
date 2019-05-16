import { Module } from '@nestjs/common';
import { LocadoraPessoalModule } from './locadora-pessoal/locadora-pessoal.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [LocadoraPessoalModule, AuthModule]
})
export class AppModule {}
