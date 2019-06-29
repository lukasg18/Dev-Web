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
import { CepService } from './service/cep.service';
import { AutenticacaoService } from './service/autenticacao.service';
import { AutenticacaoController } from './controller/Autenticacao.controller';
import { GeneroService } from './service/genero.service';
import { PlataformaService } from './service/plataforma.service';
import { GeneroController } from './controller/genero.controller';
import { PlataformaController } from './controller/plataforma.controller';
import { JogoService } from './service/jogo.service';
import { JogoController } from './controller/jogo.controller';
import { PessoaJogoService } from './service/pessoa-jogo.service';
import { PessoaJogoController } from './controller/pessoa-jogo.controller';
import { ContaBancaria } from './model/conta-bancaria.entity';
import { ContaBancariaController } from './controller/conta-bancaria.controller';
import { ContaBancariaService } from './service/conta-bancaria.service';
import { LocacaoService } from './service/locacao.service';
import { LocacaoController } from './controller/locacao.controller';
import { PagamentoService } from './service/pagamento.service';
import { RecomendacaoService } from './service/recomendacao.service';
import { RecomendacaoController } from './controller/recomendacao.controller';

const modelProvider = [...databaseProviders];

const modelService = [
  AtendenteService,
  PessoaService,
  EstadoService,
  BairroService,
  MunicipioService,
  CepService,
  AutenticacaoService,
  GeneroService,
  PlataformaService,
  JogoService,
  PessoaJogoService,
  ContaBancariaService,
  PagamentoService,
  LocacaoService,
  RecomendacaoService
];

const modelController = [
  PessoaController,
  AtendenteController,
  EstadoController,
  BairroController,
  MunicipioController,
  AutenticacaoController,
  GeneroController,
  PlataformaController,
  JogoController,
  PessoaJogoController,
  ContaBancariaController,
  LocacaoController,
  RecomendacaoController,
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
