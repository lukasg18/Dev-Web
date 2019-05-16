import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { authenticate } from 'passport';

// Strategies
import { PessoaAuthController } from './controller/pessoa-ath.controller';
import { AuthService } from './service/AuthService';
import { GoogleStrategy } from './passport/google.strategy';
import { JwtStrategy } from './passport/jwt.strategy';

@Module({
  imports: [],
  providers: [AuthService, GoogleStrategy, JwtStrategy],
  controllers: [PessoaAuthController],
})
export class AuthModule {}
