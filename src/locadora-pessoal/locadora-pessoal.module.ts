import { CacheModule, Module } from '@nestjs/common';
import { PessoaService } from './service/pessoa.service';
import { databaseProviders } from './database/database.providers';
import { PessoaController } from './controller/pessoa.controller';
import { AtendenteService } from './service/atendente.service';
import { AtendenteController } from './controller/atendente.controller';
import { EstadoService } from './service/estado.service';
import { EstadoController } from './controller/estado.controller';
import { BairroService } from './service/bairro.service';
import { BairroController } from './controller/bairro.controller';
import { MunicipioService } from './service/municipio.service';
import { MunicipioController } from './controller/municipio.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CepService } from './service/cep.service';

const modelProvider = [...databaseProviders];

const modelService = [
  AtendenteService,
  PessoaService,
  EstadoService,
  BairroService,
  MunicipioService,
  CepService,
];

const modelController = [
  PessoaController,
  AtendenteController,
  EstadoController,
  BairroController,
  MunicipioController,
 ];

@Module({
  imports: [CacheModule.register({
    ttl: 10,
    max: 10, 
  })],
  providers: [...modelProvider, ...modelService],
  controllers: [...modelController],
})
export class LocadoraPessoalModule {}
