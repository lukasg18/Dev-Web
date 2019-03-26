# TRABALHO 01 : Sistema de Gerenciamento de Medicamentos para População de Fundão

Trabalho desenvolvido durante a disciplina de BD

    O referido projeto poderá ser:
        a) Um novo sistema/projeto 
        b) Uma expansão de sistema/projeto previamente desenvolvido em disciplinas anteriores 
        (ex: Expansão dos módulos do sistema desenvolvidos em BD1 - incremento mínimo de 50% nos 
        requisitos/complexidade)
        c) Nas avaliações parciais do professor, o grupo deverá anotar todas as observaçoes que forem feitas pelo professor 
        e pelo proprio grupo, enviar uma cópia das atividades por e-mail para o grupo e postar imediatamente estas observaçõe
        como tarefas a serem realizadas como tarefas por meio do gerenciador de projetos do git.
        d) Todas as tarefas devem ser realizadas e deve-se atentar para distribuição igualitária de atividades levando-se 
        em consideração o peso destas.
        e) Os tópicos numerados para cada atividade no devem ser removidos do trabalho. Entretanto, os conteúdos de exemplo 
        em cada tópico devem ser substituídos pelo conteúdo do trabalho em desenvolvimento.
        f) sprints de entrega serão quinzenais ou mensais definidos em aula juntamente com o professor
    
    OBS Importantes: 
        a) Os projetos/sistemas propostos serão validados pelo professor e pela turma
        b) Se possível é interessante que os novos sistemas estejam correlacionados com alguma área 
        previamente estudada pelo aluno
        c) Caso dependa de alguma instituição/parceiro externo, a base de dados e informações pertinentes 
        a esta devem ser obtidas no prazo de até 15 dias apos aprovação da proposta do trabalho 
        (caso contrário, nova proposta deverá ser apresentada a turma implicando logicamente em um prazo 
        mais curto para realização das atividades e conclusão do trabalho)
    
DICA: 
    O kickstart normalmente lança inovaçôes em termos de Sofwares e Apps, portanto pode ser interessante 
    olhar os lançamentos recentes para incrementar as possibilidades e aguçar a criatividade, o que pode 
    auxiliar o grupo com novas ideias na solução proposta. Acesse os links abaixo do para explorar sobre apps e softwares no Kickstarter.
    <br>
    https://www.kickstarter.com/discover/categories/technology/software
    <br>
    https://www.kickstarter.com/discover/categories/technology/apps
# Sumário

### 1	COMPONENTES<br>
* Harã Heique: heikacademicos@hotmail.com
* Jennifer Amaral: jennifergamaral@gmail.com
* Lucas Gomes: lukas.gomes2010@gmail.com
* Luiz Henrique: luiz.lk.lima@gmail.com

Links da aplicação em desenvolvimento:
* Frontend: https://github.com/HaraHeique/frontend-POO-without-angular
* Backend: https://github.com/lukasg18/poo2-backend

### 2	INTRODUÇÃO E MOTIVAÇAO<br>
Os motivos da escolha do sistema proposto são da população não ter a necessidade de ir até o posto sem ter a certeza da obtenção do medicamento, o que consequentemente evitaria filas enormes para a solicitação. Com isso facilitaria a solicitação de medicamentos pela população local, além de ajudar os atendentes internos que trabalham nos postos de controlar e administrar o sistema de forma mais eficiente.
      
### 3	MINI-MUNDO<br>
O registro dos medicamentos são feitos assim que chegam na unidade, registrando assim o nome, o lote, a validade e a fabricação do medicamento. A cada transação é registrado no estoque o medicamento distribuído. A população para fazer a retirada de medicamentos deve levar a carteirinha do SUS, Receita médica emitida pelos serviços públicos de saúde e um documento original com foto. Cada pessoa pode registrar até 3 dependentes com motivos excepcionais para a retirada de remédio em seu lugar. Será feito um cadastro de cada pessoa através do cartão do SUS e outras informações pessoais para a retirada de medicamentos.<br>
A população pode consultar de maneira online os medicamentos disponíveis em determinados postos da região e solicitar um medicamento em um posto específico.<br>
O responsável pelo sistema terá que realizar a tarefa de cadastro de usuário, cadastro de remédio e registrar as transações efetuadas, além de poder emitir relatórios dos pacientes mensais, medicamentos que saíram no mês, entre outros relatórios. Ele também será notificado no sistema sobre medicamentos próximos de vencer ou sem ter no estoque para solicitar a substituição e o envio dos medicamentos.<br>
Será utilizado das informações de medicações e de dados de consumo médio para elaborar estoques mais flexíveis e também facilitar o rodízio de medicamentos menos usados de um posto para o outro.

### 4	RASCUNHOS BÁSICOS DA INTERFACE (MOCKUPS)<br>

[PDF Subsistema para Atendente do posto](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Prot%C3%B3tipos/Atendente%20Web.pdf)
![Alt text](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Imagens/Prot%C3%B3tipos/Atendimento_posto.png)

[PDF Subsistema para solicitação de Medicamentos realizado pela População](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Prot%C3%B3tipos/Popula%C3%A7%C3%A3o%20WebSite.pdf)
![Alt text](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Imagens/Prot%C3%B3tipos/Atendimento_populacao.png)

### 5	MODELO CONCEITUAL<br>
#### 5.1 NOTACAO ENTIDADE RELACIONAMENTO
![Alt text](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Imagens/Modelos/Modelo_Conceitual.png)
    
#### 5.2 NOTACAO UML (Caso esteja fazendo a disciplina de Projeto)

Subsistema para solicitação de Medicamentos realizado pela População
![Alt text](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Imagens/Modelos/Diagrama_classes_projeto_AtendimentoPopulacao.png)

Subsistema para Atendente do posto
![Alt text](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Imagens/Modelos/Diagrama_classes_projeto_ControleEstoque.png)

## Data de Entrega: (23/08/2018) 
(Apresentação para o professor em sala de aula)

#### 5.3 DECISÕES DE PROJETO
    - sexo: este campo se tornou um atributo em vez de uma tabela, pois em nível de código é um atributo/propriedade da classe Pessoa do tipo Enum Sexo. 
    Assim quando se utilizar o ORM para gerar as tabelas do banco de dados será mapeado com um código inteiro correspondente do Enum Sexo.
    - estadoMedicamento: Mesmos motivos do atributo sexo com diferença que a 
    propriedade é do tipo Enum EstadoMedicamento.
    - estadoSolicitacao: Mesmos motivos dos atributos sexo e estadoMedicamento. 
    Entretanto com a diferença que a propriedade é do tipo Enum EstadoSolicitacao.
    - endereço: como decisão foi decidido quebrar em três entidades que se relacionam, os quais são: Estado, Municipio e Bairro. 
    Além de a própria entidade posto também conter informações específicas de localização do posto, como latitude e longitude que tem como principal objetivo na visualização nas views que fazem o atendimento das solicitações da população.
    Outro ponto importante é mesmo que no estado inicial do software é voltado somente para o município de Fundão foram criados as entidades Município e Estado visando a escalabilidade e crescimento do sistema.
    - Dependente: apesar dessa entidade não conter nenhum atributo específico que não herde da entidade Pessoa foi decidido
    que existisse para que tivesse a separação apropriada entre os tipos de pessoas, 
    ou seja, caso queira pegar os atendentes do sistema só ir até a tabela de atendentes, assim como também tanto para o dependente quanto para o titular.
    - Entrada_Medicamento: é uma entidade surgida pelo relacionamento n:n de Atendente com Medicamento_Posto e 
    basicamente serve para o controle e registro de entrada medicamentos realizados pelo atendente do posto. 
    Anteriormente foram modelados diversas maneiras até chegar nessa entidade, mas que pode sofrer alterações futuras.
    - Recebimento: como foi citado acima sobre o controle de entrada de medicamentos, a entidade Recebimento surge também do relacionamento n:n de Pessoa com Medicamento_Posto e atua de maneira a controlar e 
    registrar a saída de medicamentos previamente solicitados pelos usuários referente a população.
    - dataVencimento: é um atributo da entidade Medicamento_Posto que indica a data de vencimento do medicamento referente ao determinado posto. 
    Em um sistema em produção e com aplicação real o ideal e coerente seria a utilização de uma entidade lote que se relaciona com Medicamento_Posto e teria como atributos: número do lote, assim como sua data de vencimento do lote em questão e a quantidade de medicamentos do lote. 
    Entretanto foi decidido ter somente um data de vencimento comum aos medicamentos em geral para facilitar no desenvolvimento do sistema para uma versão inicial. 
    Logo, claramente se fosse colocado o sistema em produção deveria adotar uma estratégia como a do lote mencionada anteriormente.
    - Medicamento: como no tópico anterior, o medicamento é uma entidade mais complexa e com mais características. Como decisão de projeto decidimos pegar somente algumas características mais relevantes até o momento. 
    Claramente que em versões posteriores ou até mesmo em uma aplicação real do software em produção ela seria uma classe mais bem trabalhada e detalhada, definindo os tipos de medicamentos, suas categorias e afins.

#### 5.4 DESCRIÇÃO DOS DADOS
    ATENDENTE: Tabela que contém os dados do atendente do posto.
        idpessoa: campo que armazena o Identificador de pessoa(o atendente no caso).
        numeroregistro: campo que armazena o registro de funcionário do posto.
        idposto: campo que armazena o Identificador do posto que o atendente está alocado.
        
    BAIRRO: Tabela que contém dados sobre o bairro em que o posto de saúde está localizado.
        idbairro: campo que armazena o identificador do bairro.
        nome: campo que armazena o nome do bairro.
        idmunicipio: campo que armazena o identificador do município que o bairro está alocado.

    DEPENDENTE: Tabela que armazena apenas os códigos de pessoa e titular ligados ao qual pertence
        idpessoa: campo que armazena o Identificador de pessoa(o dependente no caso).
        idtitular: campo que armazena o Identificador do titular ao qual o dependente está ligado.
    
    ESTADO: Tabela que contém dados sobre o estado em que o posto de saúde está localizado.
        idestado: campo que armazena o identificador do estado.
        nome: campo que armazena o nome do estado.
    
    LABORATORIO: Tabela que contém dados acerca do laboratório ao qual pertence o medicamento.
        idlaboratorio: campo que armazena o identificador do laboratório.
        nome: campo que armazena o nome do laboratório.
    
    MEDICAMENTO: Tabela que contém dados sobre o medicamento.
        idmedicamento: campo que armazena o identificador do medicamento.
        nome: campo que armazena o nome do medicamento.	
        bula: campo que armazena o link das páginas html sobre a bula do medicamento.
        
    MEDICAMENTO_LABORATORIO: Tabela que reúne dados das entidades Medicamento e Laboratório.
        idlaboratorio: campo que guarda o identificador do laboratório.
        idmedicamento: campo que guarda o identificador do Medicamento.
        
    MEDICAMENTO_POSTO: Tabela que contém os dados sobre os medicamentos de acordo com a localização do posto de saúde e reúne dados das entidades Posto e Medicamento.
        idmedicamentoPosto: campo que armazena o identificador do medicamento de acordo com o posto.
        estadomedicamento: campo que armazena a disponibilidade do medicamento de acordo com o posto(indisponível(0) e disponível(1)).
        quantidade: campo que guarda a quantidade de determinado medicamento de acordo com o posto.
        datavencimento: campo que guarda a data de vencimento do medicamento no dado posto.
        idposto: campo que armazena o identificador do posto.
        idmedicamento: campo que armazena o identificador do medicamento.
    
    MUNICIPIO: Tabela que contém dados sobre o município em que o posto de saúde está localizado.
        idmunicipio: campo que armazena o identificador do município.
        nome: campo que armazena o nome do município.
        idestado: campo que armazena o identificador do Estado em que o município está alocado.
    
    PESSOA: Tabela que contém os dados da pessoa.
        idpessoa: campo que armazena o Identificador de pessoa.
        nome: campo que armazena o nome da pessoa.
        datanascimento: campo que armazena a data de nascimento da pessoa.
        cpf: campo que armazena o cadastro de pessoa física da pessoa
        rg: campo que armazena o registro geral do documento de identidade da pessoa.
        sexo: campo que indica o sexo da pessoa, podendo ser masculino(0) e feminino(1).
        
    POSTO: Tabela que contém os dados relacionados ao posto de saúde.
        idposto: campo que armazena o identificador do posto de saúde.
        nome: campo que armazena o nome do posto de saúde.
        rua: campo que armazena o nome da rua na qual o posto está localizado.
        numero: número de endereço do posto de saúde.
        cep: campo que armazena o código de endereçamento postal dos posto de saúde.
        coordgeolong: campo que armazena as coordenadas geográficas de longitude da localização do posto de saúde.
        coordgeolat: campo que armazena as coordenadas geográficas de latitude da localização do posto de saúde.
        idbairro: campo que armazena o identificador do bairro em que o posto se encontra.
    
    RECEBIMENTO: Tabela que contém os dados sobre retirada dos medicamentos por uma pessoa.
        idrecebimento: campo que armazena o identificador do recebimento.
        data_hora: campo que armazena o registro de data e hora do recebimento.
        quantidademedicamento: armazena a quantidade de medicamentos retirados em um recebimento.
        idpessoa: campo que armazena o identificador da pessoa(titular ou dependente) que retira o medicamento.
        idatendente: campo que armazena o identificador do atendente que realiza a retirada do medicamento.
        idmedicamentoposto: campo que armazena o identificador do medicamento no determinado posto em que foi realizado a retirada de recebimento do medicamento.
        
    REGISTRO_MEDICAMENTO: Tabela que guarda os registro de entrada de novos medicamentos ou de medicamentos em falta no posto.
        idregistromedicamento: campo que armazena o identificador da entrada/registro de um medicamento.
        data_hora: campo que armazena o registro de data e hora da entrada de um medicamento.
        quantidade: campo que armazena a quantidade de medicamentos adquiridos(inseridos).
        idmedicamentoposto: campo que armazena o identificador do medicamento inserido no estoque do determinado posto.
        idatendente: campo que armazena o identificador do atendente que realiza a entrada de medicamentos no posto.
    
    SOLICITACAO: Tabela que contém os dados relacionados a uma solicitação de medicamento.
        idSolicitacao: campo que armazena o identificador da solicitação.
        data_hora: campo que armazena o registro de data e hora da solicitação.
        estadosolicitacao: campo que armazena o estado em que a solicitação encontra(comunicado(0), atendido(1) ou expirado(2)).
        quantidademedicamento: campo que armazena a quantidade de medicamentos solicitados.
        idtitular: campo que armazena o identificador da pessoa titular que solicitou os medicamentos.
        idmedicamentoposto: campo que armazena o identificador do medicamento no determinado posto em que foi realizado solicitação do medicamento desejado.

    TITULAR: Tabela que contém o código necessário para ser um solicitante de medicamento.
        idpessoa: campo que armazena o Identificador de pessoa(o titular no caso).
        numerosus: campo que armazena o número cadastrado da pessoa no Sistema único de Saúde.

### 6	MODELO LÓGICO<br>
![Alt text](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Imagens/Modelos/Modelo_Logico.png)

### 6.2	Padrões de Projeto<br>
#### Método Fábrica
Foi utilizado o padrão método fábrica para a criação genérica de objetos do modelo, através da importação da classe NestFactory que recebe como parâmetro do método de criação(create) os módulos desejados, nesse caso um objeto appModule, mostrado no código abaixo. 


```typescript
    import { NestFactory } from '@nestjs/core';
    import { AppModule } from './app.module';
    import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
    import * as cors from 'cors';

    async function bootstrap() {
        const app = await NestFactory.create(AppModule);
    ...
```
No código abaixo, a clsse AppModule importa diretamente um outro modulo do sistema, denominado de PooModule, onde o mesmo contém todas os controllers e serviços utilizados no projeto. A vantagem de se utilizar varios módulos separados é que o sistema fica mais facil de manutenção.

```typescript
    import { Module } from '@nestjs/common';
    import { PooModule } from './poo/poo.module';
    @Module({
      imports: [PooModule]
    })
    export class AppModule {}
```
Como dito anteriormente, os objetos estão contidos indiretamente os módulos de serviço, controladores e provedores da base de dados necessários. Dessa forma, é possível adicionar, facilmente, novos objetos ao modelo sem grandes impactos ao sistema.

```typescript

    const modelProvider = [...databaseProviders];

    const modelService = [
    MedicamentoService,
    AtendenteService,
    PessoaService,
    TitularService,
    SexoService,
    EstadoService,
    BairroService,
    MunicipioService,
    SolicitacaoService
    ];

    const modelController = [PessoaController, TitularController, SexoController, AtendenteController, EstadoController, BairroController, MunicipioController, SolicitacaoController];

    @Module({
    providers: [...modelProvider, ...modelService],
    controllers: [...modelController],
    })
    export class PooModule {}
```


#### Padrão injeção de depedência
O padrão de injeção de dependência visa remover dependências desnecessárias entre as classes ou torná-las mais suaves, contribuindo para um design de software que seja fácil de manter e evoluir. O trecho de código abaixo mostra a classe de serviço da entidade bairro que através do decorator "@Injectable()", faz com que qualquer classe que seja sua dependende, não precise conhecer detalhadamente como ela é construída, além de não precisar se inicializada na mesma. Com a implementação desse padrão a classe de serviço é "injetada" na sua respectiva classe controladora

```typescript
	// Service de Bairro
    import { Injectable, Inject } from '@nestjs/common';
    import { Bairro } from '../model/bairro.entity';

    @Injectable()
    export class BairroService{

        async readAll() {
            return await Bairro.find();
        }

        async readOne(id: number) {
            return await Bairro.findOne({idbairro:id});
        }
        ...
```

```typescript
	// Controller do Bairro onde é injetado o Service de Bairro
	import { Get, Controller, Param, Post, Body } from '@nestjs/common';
	import { BairroService } from '../service/bairro.service';
	import { Bairro } from '../model/bairro.entity';
	import { ApiUseTags } from '@nestjs/swagger';

	@ApiUseTags('poo')
	@Controller()
	export class BairroController {
	  constructor(private readonly bairroService: BairroService) {}

	  @Get('/bairro')
	  readAll():any {
		return this.bairroService.readAll();
	  }

	  @Get('/bairro/:id')
	  readOne(@Param() param):any {
		return this.bairroService.readOne(param.id);
	  }

	  @Post('/bairro')
	  Create(@Body() body):any {
		return this.bairroService.Create(body);
	  }
```

Como pode perceber na constructor de BairroController é injetado o BairroService não havendo a necessidade de saber como é construído o BairroService tendo a preocupação de somente usá-lo na classe, o qual retira dependências entre classes e torna a aplicação fácil fazer manuntenções.

#### Padrão Active Record
Active Record é um padrão de projeto que trabalha com a técnica ORM (Object Relational Mapper). Este padrão consiste em mapear um objeto a uma tabela do Banco da dados, a fim de tornar o trabalho com os dados persistido em um banco de dados, totalmente orientado a objetos.
BaseEntity é a classe que você deve estender para associar seu modelo com a tabela no Banco de Dados. Veja o trecho abaixo.

```typescript
    @Entity()
    export class Atendente extends BaseEntity {
    @PrimaryColumn()
    idpessoa: number;

    @Column({ nullable: false, length: 10, unique: true })
    numeroregistro: string;
    ...
```

```typescript
    export declare class BaseEntity {
    ....
    /**
     * Gets current entity's Repository.
     */
    static getRepository<T extends BaseEntity>(this: ObjectType<T>): Repository<T>;
    ....
```

No Active Record, a instância da entidade sabe como e onde persistir. É por isso que você pode simplesmente chamar "user.save()" e ele persiste, mostrado no trecho de codigo abaixo.

```typescript
async Create(body: any): Promise<Pessoa> {
    let pessoa = new Pessoa();
    try {
      pessoa.nome = body.nome;
      pessoa.sexo = body.sexo;
      pessoa.cpf = body.cpf;
      pessoa.datanascimento = body.datanascimento;
      pessoa.rg = body.rg;
      return await Pessoa.save(pessoa);
    } catch (err) {
      throw new Error(
        `Erro ao salvar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }
```

#### Método Paginação
Paginação é um padrão para projeto de interação de  nterface com usuário. É indicado quando o usuário necessita visualizar um subconjunto de dados que não serão  áceis de mostrar dentro de uma única página. Esse problema é solucionado com a adição de um mecanismo de paginação.
No código abaixo utilizamos o padrão paginação a classe SolicitacaoService, onde chamamos duas funções para nos auxiliar, sendo elas: O função ".offset()" que indica o início da leitura, e o ".limit()" que é o máximo de registros a serem lidos.

```typescript
export class SolicitacaoService {
  async readAll(pag: number): Promise<Solicitacao[] | any> {
    return Solicitacao.createQueryBuilder('solicitacao')
      .select(
        'solicitacao.idsolicitacao, solicitacao.data_hora, solicitacao.quantidademedicamento, solicitacao.estadosolicitacao, titular.idpessoa as idtitular, pessoa.nome as pessoa, titular.numerosus, depedente.idpessoa as iddepedente, medicamentoPosto.datavencimento, medicamentoPosto.idmedicamentoposto, posto.idposto, posto.nome as posto, medicamento.idmedicamento, medicamento.nome as medicamento',
      )
      .innerJoin('solicitacao.titular', 'titular')
      .innerJoin('solicitacao.medicamentoPosto', 'medicamentoPosto')
      .innerJoin('titular.pessoa', 'pessoa')
      .innerJoin('titular.depedente', 'depedente')
      .innerJoin('medicamentoPosto.posto', 'posto')
      .innerJoin('medicamentoPosto.medicamento', 'medicamento')
      .innerJoin('medicamento.laboratorio', 'laboratorio')
      .offset(pag * 10)
      .limit(10)
      .getRawMany();
  }

```
#### Método Cache
O Cache define a estratégia de manter uma cópia, na memória local, de objetos buscados de fora de um programa, como num servidor remoto ou banco de dados. Além disso, permite o acesso rápido ao objeto reduzindo o custo de sua construção no processo de busca.
Para utilizar o cache, é necessário importamos uma biblioteca chamada "CacheModule" fornecida pelo nestjs, mostrado no código abaixo. Depois de importamos, podemos configurar nosso cache passando alguns parametros, como o "ttl", que significa o tempo(tempo em segundos) de vida ou o tempo em que ele vai armazenar as informações em memória. E o parametro "max", que é a quantidade de informações armazenadas, neste caso ele armazena até 10 informações/dados

```typescript
import { CacheModule, Module } from '@nestjs/common';

@Module({
  imports: [CacheModule.register({
    ttl: 10,
    max: 10, 
  })],
  providers: [...modelProvider, ...modelService],
  controllers: [...modelController],
})
export class PooModule {}

```
Depois de configurarmos o cache, basta chamarmos no controller desejado, veja o código abaixo.
Repare que usamos um decorator "@UseInterceptors(CacheInterceptor)", significa que todas as nossas rotas do controller de solicitação vão ser colocadas em cache a medida que forem chamadas.

```typescript
@Controller()
@UseInterceptors(CacheInterceptor)
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}
  @Get('/solicitacao/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let solicitacao: Solicitacao[] = await this.solicitacaoService.readOne(id.id);
      if (solicitacao != undefined) {
        res.status(HttpStatus.OK).send(solicitacao);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum solicitacao encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }
```



### 7	MODELO FÍSICO<br>
[Link modelo físico](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Modelagens/Modelo_Fisico.sql)
 
 ```sql
    /* Modelo Físico */
    
    
    CREATE TABLE public."Titular" (
        idpessoa integer NOT NULL,
        numerosus integer NOT NULL
    );

    CREATE TABLE public.atendente (
        idpessoa integer NOT NULL,
        numeroregistro character varying(10) NOT NULL,
        idposto integer
    );

    CREATE TABLE public.bairro (
        idbairro integer NOT NULL,
        nome character varying(30) NOT NULL,
        idmunicipio integer
    );

    CREATE TABLE public.depedente (
        idpessoa integer NOT NULL,
        idtitular integer
    );

    CREATE TABLE public.estado (
        idestado integer NOT NULL,
        nome character varying(30) NOT NULL
    );

    CREATE TABLE public.laboratorio (
        idlaboratorio integer NOT NULL,
        nome character varying(30) NOT NULL
    );

    CREATE TABLE public.medicamento (
        idmedicamento integer NOT NULL,
        nome character varying(80) NOT NULL,
        bula character varying(200) NOT NULL
    );

    CREATE TABLE public.medicamento_laboratorio (
        idmedicamento integer NOT NULL,
        idlaboratorio integer NOT NULL
    );

    CREATE TABLE public.medicamento_posto (
        idmedicamentoposto integer NOT NULL,
        estadomedicamento integer NOT NULL,
        quantidade integer NOT NULL,
        datavencimento timestamp without time zone NOT NULL,
        idposto integer,
        idmedicamento integer
    );

    CREATE TABLE public.municipio (
        idmunicipio integer NOT NULL,
        nome character varying(80) NOT NULL,
        idestado integer
    );


    CREATE TABLE public.pessoa (
        idpessoa integer NOT NULL,
        nome character varying(100) NOT NULL,
        datanascimento timestamp without time zone NOT NULL,
        cpf character varying(12) NOT NULL,
        sexo integer NOT NULL,
        rg character varying(10) NOT NULL
    );

    CREATE TABLE public.posto (
        idposto integer NOT NULL,
        complemento character varying(200) NOT NULL,
        nome character varying(200) NOT NULL,
        rua character varying(200) NOT NULL,
        cep integer NOT NULL,
        numero integer NOT NULL,
        coordgeolong double precision NOT NULL,
        coordgeolat double precision NOT NULL,
        idbairro integer
    );

    CREATE TABLE public.recebimento (
        idrecebimento integer NOT NULL,
        quantidademedicamentos integer NOT NULL,
        data_hora timestamp without time zone NOT NULL,
        idpessoa integer,
        idatedente integer,
        idmedicamentoposto integer
    );

    CREATE TABLE public.registro_medicamento (
        idregistromedicamento integer NOT NULL,
        quantidade integer NOT NULL,
        data_hora timestamp without time zone NOT NULL,
        idatendente integer,
        idmedicamentoposto integer
    );

    CREATE TABLE public.solicitacao (
        idsolicitacao integer NOT NULL,
        data_hora timestamp without time zone NOT NULL,
        quantidademedicamento integer NOT NULL,
        estadosolicitacao integer NOT NULL,
        idtitular integer,
        idmedicamentoposto integer
    );

    ALTER TABLE ONLY public.pessoa
        ADD CONSTRAINT "PK_103e8f7f4ebf0ca871bbe4f8a3c" PRIMARY KEY (idpessoa);


    --
    -- TOC entry 2122 (class 2606 OID 61959)
    -- Name: PK_4fdaa48a8d5b79bfc8f5959251a; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.bairro
        ADD CONSTRAINT "PK_4fdaa48a8d5b79bfc8f5959251a" PRIMARY KEY (idbairro);


    --
    -- TOC entry 2130 (class 2606 OID 61994)
    -- Name: PK_55f589d48cf08820e62c4218619; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.medicamento_posto
        ADD CONSTRAINT "PK_55f589d48cf08820e62c4218619" PRIMARY KEY (idmedicamentoposto);


    --
    -- TOC entry 2112 (class 2606 OID 61928)
    -- Name: PK_746650b7410a8cea3f66aa08e96; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.recebimento
        ADD CONSTRAINT "PK_746650b7410a8cea3f66aa08e96" PRIMARY KEY (idrecebimento);


    --
    -- TOC entry 2118 (class 2606 OID 61943)
    -- Name: PK_81df0554baeeb3c342378a627ad; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.estado
        ADD CONSTRAINT "PK_81df0554baeeb3c342378a627ad" PRIMARY KEY (idestado);


    --
    -- TOC entry 2120 (class 2606 OID 61951)
    -- Name: PK_9288f1d12a5d8150c355b5e9b16; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.municipio
        ADD CONSTRAINT "PK_9288f1d12a5d8150c355b5e9b16" PRIMARY KEY (idmunicipio);


    --
    -- TOC entry 2126 (class 2606 OID 61978)
    -- Name: PK_a02d191f1adefa1e3c2b21ef553; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.laboratorio
        ADD CONSTRAINT "PK_a02d191f1adefa1e3c2b21ef553" PRIMARY KEY (idlaboratorio);


    --
    -- TOC entry 2114 (class 2606 OID 61933)
    -- Name: PK_a5b0986f6decfe7ce7d287a8afc; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.atendente
        ADD CONSTRAINT "PK_a5b0986f6decfe7ce7d287a8afc" PRIMARY KEY (idpessoa);


    --
    -- TOC entry 2134 (class 2606 OID 62007)
    -- Name: PK_aae06f9c94ee75703a930472480; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.depedente
        ADD CONSTRAINT "PK_aae06f9c94ee75703a930472480" PRIMARY KEY (idpessoa);


    --
    -- TOC entry 2136 (class 2606 OID 62012)
    -- Name: PK_b641f90e20dbdd9a429a5af575d; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public."Titular"
        ADD CONSTRAINT "PK_b641f90e20dbdd9a429a5af575d" PRIMARY KEY (idpessoa);


    --
    -- TOC entry 2128 (class 2606 OID 61986)
    -- Name: PK_c9eba17e6634c1e256d21d9ff33; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.medicamento
        ADD CONSTRAINT "PK_c9eba17e6634c1e256d21d9ff33" PRIMARY KEY (idmedicamento);


    --
    -- TOC entry 2110 (class 2606 OID 61920)
    -- Name: PK_caa0afb5240252ec27258f685d5; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.registro_medicamento
        ADD CONSTRAINT "PK_caa0afb5240252ec27258f685d5" PRIMARY KEY (idregistromedicamento);


    --
    -- TOC entry 2124 (class 2606 OID 61970)
    -- Name: PK_cc32119736b40c091e8bb97c554; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.posto
        ADD CONSTRAINT "PK_cc32119736b40c091e8bb97c554" PRIMARY KEY (idposto);


    --
    -- TOC entry 2144 (class 2606 OID 62029)
    -- Name: PK_df376ac8b15a58f4693f765dbc7; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.medicamento_laboratorio
        ADD CONSTRAINT "PK_df376ac8b15a58f4693f765dbc7" PRIMARY KEY (idmedicamento, idlaboratorio);


    --
    -- TOC entry 2132 (class 2606 OID 62002)
    -- Name: PK_ffd64b9cb2dfb73cf046c16907a; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.solicitacao
        ADD CONSTRAINT "PK_ffd64b9cb2dfb73cf046c16907a" PRIMARY KEY (idsolicitacao);


    --
    -- TOC entry 2140 (class 2606 OID 62024)
    -- Name: UQ_70e82a4695f07a6ce61fc9492b6; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.pessoa
        ADD CONSTRAINT "UQ_70e82a4695f07a6ce61fc9492b6" UNIQUE (rg);


    --
    -- TOC entry 2116 (class 2606 OID 61935)
    -- Name: UQ_a134eaf7339d2c607039333f008; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.atendente
        ADD CONSTRAINT "UQ_a134eaf7339d2c607039333f008" UNIQUE (numeroregistro);


    --
    -- TOC entry 2142 (class 2606 OID 62022)
    -- Name: UQ_ee80cc840596cc1bca8a149bcd5; Type: CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.pessoa
        ADD CONSTRAINT "UQ_ee80cc840596cc1bca8a149bcd5" UNIQUE (cpf);


    --
    -- TOC entry 2152 (class 2606 OID 62065)
    -- Name: FK_00033fc05927f355f13fe4aabe6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.municipio
        ADD CONSTRAINT "FK_00033fc05927f355f13fe4aabe6" FOREIGN KEY (idestado) REFERENCES public.estado(idestado);


    --
    -- TOC entry 2155 (class 2606 OID 62080)
    -- Name: FK_34211f805b13249a304d0490fb3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.medicamento_posto
        ADD CONSTRAINT "FK_34211f805b13249a304d0490fb3" FOREIGN KEY (idposto) REFERENCES public.posto(idposto);


    --
    -- TOC entry 2159 (class 2606 OID 62100)
    -- Name: FK_444445956119983f6d824840cd5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.depedente
        ADD CONSTRAINT "FK_444445956119983f6d824840cd5" FOREIGN KEY (idtitular) REFERENCES public."Titular"(idpessoa);


    --
    -- TOC entry 2149 (class 2606 OID 62050)
    -- Name: FK_475829d5c50c3859ce7ccb37646; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.recebimento
        ADD CONSTRAINT "FK_475829d5c50c3859ce7ccb37646" FOREIGN KEY (idmedicamentoposto) REFERENCES public.medicamento_posto(idmedicamentoposto);


    --
    -- TOC entry 2150 (class 2606 OID 62055)
    -- Name: FK_590cc4410853d91b70266bdfde0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.atendente
        ADD CONSTRAINT "FK_590cc4410853d91b70266bdfde0" FOREIGN KEY (idposto) REFERENCES public.posto(idposto);


    --
    -- TOC entry 2162 (class 2606 OID 62115)
    -- Name: FK_59f71b7b9ec062ef9be80f527f0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.medicamento_laboratorio
        ADD CONSTRAINT "FK_59f71b7b9ec062ef9be80f527f0" FOREIGN KEY (idmedicamento) REFERENCES public.medicamento(idmedicamento) ON DELETE CASCADE;


    --
    -- TOC entry 2153 (class 2606 OID 62070)
    -- Name: FK_6ac866ccb173b3b7698a49541ff; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.bairro
        ADD CONSTRAINT "FK_6ac866ccb173b3b7698a49541ff" FOREIGN KEY (idmunicipio) REFERENCES public.municipio(idmunicipio);


    --
    -- TOC entry 2148 (class 2606 OID 62045)
    -- Name: FK_816a839606b454616adab6960fd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.recebimento
        ADD CONSTRAINT "FK_816a839606b454616adab6960fd" FOREIGN KEY (idatedente) REFERENCES public.atendente(idpessoa);


    --
    -- TOC entry 2151 (class 2606 OID 62060)
    -- Name: FK_a5b0986f6decfe7ce7d287a8afc; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.atendente
        ADD CONSTRAINT "FK_a5b0986f6decfe7ce7d287a8afc" FOREIGN KEY (idpessoa) REFERENCES public.pessoa(idpessoa);


    --
    -- TOC entry 2160 (class 2606 OID 62105)
    -- Name: FK_aae06f9c94ee75703a930472480; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.depedente
        ADD CONSTRAINT "FK_aae06f9c94ee75703a930472480" FOREIGN KEY (idpessoa) REFERENCES public.pessoa(idpessoa);


    --
    -- TOC entry 2161 (class 2606 OID 62110)
    -- Name: FK_b641f90e20dbdd9a429a5af575d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public."Titular"
        ADD CONSTRAINT "FK_b641f90e20dbdd9a429a5af575d" FOREIGN KEY (idpessoa) REFERENCES public.pessoa(idpessoa);


    --
    -- TOC entry 2154 (class 2606 OID 62075)
    -- Name: FK_c52dd314fd94874d9d261059c2e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.posto
        ADD CONSTRAINT "FK_c52dd314fd94874d9d261059c2e" FOREIGN KEY (idbairro) REFERENCES public.bairro(idbairro);


    --
    -- TOC entry 2146 (class 2606 OID 62035)
    -- Name: FK_c6c78ca2cfd73ad0dbdafcc5005; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.registro_medicamento
        ADD CONSTRAINT "FK_c6c78ca2cfd73ad0dbdafcc5005" FOREIGN KEY (idmedicamentoposto) REFERENCES public.medicamento_posto(idmedicamentoposto);


    --
    -- TOC entry 2158 (class 2606 OID 62095)
    -- Name: FK_d38b3913472dde9e8bdd6c7f15f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.solicitacao
        ADD CONSTRAINT "FK_d38b3913472dde9e8bdd6c7f15f" FOREIGN KEY (idmedicamentoposto) REFERENCES public.medicamento_posto(idmedicamentoposto);


    --
    -- TOC entry 2163 (class 2606 OID 62120)
    -- Name: FK_d8109f3516752ce13ee32b692ce; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.medicamento_laboratorio
        ADD CONSTRAINT "FK_d8109f3516752ce13ee32b692ce" FOREIGN KEY (idlaboratorio) REFERENCES public.laboratorio(idlaboratorio) ON DELETE CASCADE;


    --
    -- TOC entry 2147 (class 2606 OID 62040)
    -- Name: FK_ddf1939ef15cc85d043eecb2d88; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.recebimento
        ADD CONSTRAINT "FK_ddf1939ef15cc85d043eecb2d88" FOREIGN KEY (idpessoa) REFERENCES public.pessoa(idpessoa);


    --
    -- TOC entry 2156 (class 2606 OID 62085)
    -- Name: FK_e12054ea5e6bedd76415f02b4bb; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.medicamento_posto
        ADD CONSTRAINT "FK_e12054ea5e6bedd76415f02b4bb" FOREIGN KEY (idmedicamento) REFERENCES public.medicamento(idmedicamento);


    --
    -- TOC entry 2145 (class 2606 OID 62030)
    -- Name: FK_e7076e84095a8abb5cff10db3b0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.registro_medicamento
        ADD CONSTRAINT "FK_e7076e84095a8abb5cff10db3b0" FOREIGN KEY (idatendente) REFERENCES public.atendente(idpessoa);


    --
    -- TOC entry 2157 (class 2606 OID 62090)
    -- Name: FK_f61371e9c058a6d9c9ab83d99fa; Type: FK CONSTRAINT; Schema: public; Owner: postgres
    --

    ALTER TABLE ONLY public.solicitacao
        ADD CONSTRAINT "FK_f61371e9c058a6d9c9ab83d99fa" FOREIGN KEY (idtitular) REFERENCES public."Titular"(idpessoa);


    --
    -- TOC entry 2312 (class 0 OID 0)
    -- Dependencies: 6
    -- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
    --

    REVOKE ALL ON SCHEMA public FROM PUBLIC;
    REVOKE ALL ON SCHEMA public FROM postgres;
    GRANT ALL ON SCHEMA public TO postgres;
    GRANT ALL ON SCHEMA public TO PUBLIC;


    -- Completed on 2018-10-11 09:28:17 BRT

    --
    -- PostgreSQL database dump complete
    --
```




### 8	INSERT APLICADO NAS TABELAS DO BANCO DE DADOS<br>
#### 8.1 DETALHAMENTO DAS INFORMAÇÕES

[Nomes de laboratórios](https://guiadafarmacia.com.br/industrias/)<br>
[Nomes comuns de pessoas](https://github.com/emersonsoares/SampleDataGenerator/blob/master/SampleDataGenerator/Resources/nomes.txt)<br>
[Sobrenomes comuns](https://pt.wiktionary.org/wiki/Ap%C3%AAndice:Sobrenomes_em_portugu%C3%AAs)<br>
[Nomes de Composições quimicas / remedios](http://www.subpav.org/aaz/)<br>
[Nomes de bairros](https://pt.wikipedia.org/wiki/Lista_de_bairros_de_Fund%C3%A3o_(Esp%C3%ADrito_Santo))<br>

     
        
#### 8.2 INCLUSÃO DO SCRIPT PARA CRIAÇÃO DE TABELAS E INSERÇÃO DOS DADOS (ARQUIVO ÚNICO COM):
        
[Biblioteca do gerador](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/GeradorDeDados/Luiz_code/gerador.py)<br>
[Gerador de inserção dados](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/GeradorDeDados/Luiz_code/geradorExecutar.py)

     
* 1 - Abrir o arquivo geradorExecutar.py
* 2 - Para executar o programa, abra o terminal e digite:
```shell
    python3 geradorExecutar.py
```
        

### 9	TABELAS E PRINCIPAIS CONSULTAS<br>
#### 9.1	GERACAO DE DADOS (MÍNIMO DE 10 REGISTROS PARA CADA TABELA NO BANCO DE DADOS)<br>
    Foram registrados mais de 10 registros em cada tabela com exceção nas tabelas:
        * Estado, pois está sendo levado em consideração somente o ES;
        * Municipio, onde também está sendo levado em consideração somente Fundão no escopo do projeto;

## Data de Entrega: (06/09/2018)

<br>
OBS: Incluir para os tópicos 9.2 e 9.3 as instruções SQL + imagens (print da tela) mostrando os resultados.<br>

#### 9.2	SELECT DAS TABELAS COM PRIMEIROS 10 REGISTROS INSERIDOS <br>
[Selects de todas as tabelas](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Queries/selects_10_primeiros_registros.sql)

```sql 
    SELECT * FROM atendente limit 10;
```    
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/atendente.png"></p><br><br>

```sql
    SELECT * FROM bairro limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/bairro.png"></p><br><br>

```sql
    SELECT * FROM dependente limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/depedente.png"></p><br><br>

```sql
    SELECT * FROM estado limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/estado.png"></p><br><br>

```sql
    SELECT * FROM laboratorio limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/laboratorio.png"></p><br><br>

```sql
    SELECT * FROM medicamento limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/medicamento.png"></p><br><br>

```sql
    SELECT * FROM medicamento_laboratorio limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/medicamento_laboratorio.png"></p><br><br>

```sql
    SELECT * FROM medicamento_posto limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/medicamento_posto.png"></p><br><br>

```sql
    SELECT * FROM municipio limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/municipio.png"></p><br><br>

```sql
    SELECT * FROM pessoa limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/pessoa.png"></p><br><br>

```sql
    SELECT * FROM posto limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/posto.png"></p><br><br>

```sql
    SELECT * FROM recebimento limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/recebimento.png"></p><br><br>

```sql
    SELECT * FROM registro_medicamento limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/registro_medicamento.png"></p><br><br>

```sql
    SELECT * FROM solicitacao limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/solicitacao.png"></p><br><br>

```sql
    SELECT * FROM titular limit 10;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Selects%2010%20primeiros%20registros/titular.png"></p><br><br>


#### 9.3	SELECT DAS VISÕES COM PRIMEIROS 10 REGISTROS DA VIEW <br>
[Criação das views](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Queries/Principais_Views.sql) <br>
[Selects de todas as views](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Queries/Selects%20das%20Principais%20views.sql)

```sql
    SELECT * FROM view_cadastro_medicamentos LIMIT 10;
```
![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Principais%20Views/View%20Atendente%20Cadastro%20Medicamentos.png)<br><br>

    - Público alvo: Voltado os usuários atendentes dos postos para o CRUD geral de medicamentos no sistema, onde todos os
    atendentes do determinado posto terão permissões de consultas, inserções, deleções e edição dos medicamentos
    - View relacionadas: Página de cadastro de medicamentos retirada do protótipo do sistema.

![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Prot%C3%B3tipos/view%20cadastrar%20medicamentos.png)<br><br>


```sql
    SELECT * FROM view_cadastro_pacientes LIMIT 10;
```
![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Principais%20Views/View%20Atendente%20Cadastro%20Pacientes.png)

    - Público alvo: Voltado aos usuários atendentes dos postos para o CRUD geral de pacientes no sistema, onde todos os
    atendentes do determinado posto terão permissões de consultas, inserções, deleções e edição dos pacientes. Lembrando
    que os pacientes é o mesmo que a população em geral que solicitam medicamentos através do sistema.
    - View relacionadas: Página de cadastro de pacientes retirada do protótipo do sistema.

![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Prot%C3%B3tipos/view%20cadastrar%20pacientes.png)<br><br>

```sql
    SELECT * FROM view_retirar_medicamentos_solicitados LIMIT 10;
```
![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Principais%20Views/View%20Atendente%20retirar%20medicamentos%20solicitados.png)

    - Público alvo: Voltado aos usuários atendentes dos postos retirada dos medicamentos solicitados realizado pelos
    pacientes/população, onde os atendentes tem as permissões de excluir, consultar e editar somente um campo de estado
    da solicitação feita pelo paciente, onde assumirá o estado de expirado ou atendido.
    - View relacionadas: Página de retirar medicamentos solicitados do protótipo do sistema.

![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Prot%C3%B3tipos/view%20retirar%20medicamentos%20solicitados.png)

    OBS.: Note que na tabela do banco a coluna estado da solicitação possui valores de 1 a 3, onde estes são redenrizados 
    na data table do front em comunicado, atendido e experido.
<br><br>

```sql
    SELECT * FROM view_medicamentos_mais_retirados_por_quantidade LIMIT 10;
```
![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Principais%20Views/View%20Atendente%20Medicamentos%20mais%20retirados.png)
    
    - Público alvo: Voltado aos usuários atendentes dos postos para geração de relatórios de medicamentos mais retirados
    por quantidade, ou seja, pela quantidade unidades retiradas em cada retirada dos medicamentos nos postos.
    - View relacionadas: Página de gerar relatórios do protótipo do sistema.

![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Prot%C3%B3tipos/view%20gerar%20relat%C3%B3rios.png)<br><br>

```sql
    SELECT * FROM view_medicamentos_mais_retirados_por_numero_retiradas LIMIT 10;
```
![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Principais%20Views/View%20Atendente%20Medicamentos%20mais%20retirados%20por%20n%C3%BAmero%20de%20retiradas.png)
    
    - Público alvo: Voltado aos usuários atendentes dos postos para geração de relatórios de medicamentos mais retirados
    por número de retiradas feitas pelos pacientes, ou seja, pela quantidade de retiradas e não pelo quantidade de
    medicamentos em cada retirada.
    - View relacionadas: Página de gerar relatórios do protótipo do sistema.

![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Prot%C3%B3tipos/view%20gerar%20relat%C3%B3rios.png)<br><br>


```sql
    SELECT * FROM view_medicamentos_mais_solicitados_por_quantidade LIMIT 10;
```
![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Principais%20Views/View%20Atendente%20Medicamentos%20mais%20solicitados%20por%20quantidade.png)

    - Público alvo: Voltado aos usuários atendentes dos postos para geração de relatórios de medicamentos mais solicitados
    por quantidade, ou seja, pela quantidade unidades solicitadas em cada solicitação dos medicamentos nos postos.
    - View relacionadas: Página de gerar relatórios do protótipo do sistema.

![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Prot%C3%B3tipos/view%20gerar%20relat%C3%B3rios.png)<br><br>


```sql
    SELECT * FROM view_medicamentos_mais_solicitados_por_numero_solicitacoes LIMIT 10;
```
![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Principais%20Views/View%20Atendente%20Medicamentos%20mais%20retirados%20por%20n%C3%BAmero%20de%20retiradas.png)

    - Público alvo: Voltado aos usuários atendentes dos postos para geração de relatórios de medicamentos mais solicitados
    por número de solicitações feitas pelos pacientes, ou seja, pela quantidade de solicitações e não pelo quantidade de
    medicamentos em cada solicitação.
    - View relacionadas: Página de gerar relatórios do protótipo do sistema.

![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Prot%C3%B3tipos/view%20gerar%20relat%C3%B3rios.png)<br><br>


```sql
    SELECT * FROM view_medicamentos_para_solicitacao LIMIT 10;
```
![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Principais%20Views/View%20Popula%C3%A7%C3%A3o%20medicamento%20para%20solicita%C3%A7%C3%A3o%20nos%20postos.png) 
    
    - Público alvo: Voltado para a população/pacientes que desejam solicitar medicamentos nos postos. Assim é possível
    de verificar e solicitar medicamentos, caso estejam disponível, e retirá-los nos postos.
    - View relacionadas: Página de solicitações de medicamentos do protótipo do sistema.

![Alt text](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Prot%C3%B3tipos/view%20medicamento%20para%20solicitacao.png)

    OBS.: Note que não tem a coluna posto na view, pois não há necessidade, dado que a tabela que aparece dos medicamentos
    é no próprio posto, pois o paciente escolhe o posto através do mapa. Outro ponto é que a disponibilidade é 1 para
    indisponível e 2 para disponível na tabela do banco. Já na view isso é redenrizado em run-time na data table.



#### 9.4	LISTA DE CODIGOS DAS FUNÇÕES, ASSERÇOES E TRIGGERS<br>
[Criação e Select das Functions](https://raw.githubusercontent.com/lukasg18/Topicos-Trabalho-BD2/master/Queries/functions.sql)<br>
[Criação das Triggers e Assertions](https://github.com/lukasg18/Topicos-Trabalho-BD2/raw/master/Queries/triggers_assertions.sql)<br>

- OBJETIVO: Pegar todos os campos da solicitação a partir do estado da solicitação (comunicado(1), expirado(2),
atendido(3)) passando como parâmetro o estado da solicitação e o limite de linhas para ser retornadas como
resultado da query.
    
    ```sql
    DROP FUNCTION IF EXISTS get_solicitacoes_pelo_estado(int, int);
    
    CREATE OR REPLACE FUNCTION get_solicitacoes_pelo_estado(int, int)
    RETURNS SETOF solicitacao AS 
        'SELECT * FROM solicitacao WHERE estadosolicitacao=$1 LIMIT $2'
    LANGUAGE SQL;
    
    SELECT * FROM get_solicitacoes_pelo_estado(2, 150);
    ```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Function%20get_solicitacoes_pelo_estado.png"></p><br><br>

- OBJETIVO: Pegar a quantidade de medicamentos solicitados pelo Titular a partir do estado da solicitação 
(comunicado(1), expirado(2), atendido(3)), passando como parâmetro o estado da solicitação e a quantidade
de linhas limites retornadas.
    
    ```sql
    DROP FUNCTION IF EXISTS verifica_qntsolicitacao_pelo_estado(int, int);
    
    CREATE OR REPLACE FUNCTION verifica_qntsolicitacao_pelo_estado(int, int)
    RETURNS TABLE(idtitular int, qtd_solicitado bigint, estadosolicitacao int) AS $$
        SELECT idtitular, sum(quantidademedicamento), estadosolicitacao FROM solicitacao
        WHERE estadosolicitacao=$1
        GROUP BY idtitular, estadosolicitacao 
        LIMIT $2; 
    $$
    LANGUAGE SQL;
    
    SELECT * FROM verifica_qntsolicitacao_pelo_estado(1, 200);
    ```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Function%20verifica_qntSolicitacao_pelo_estado.png"></p><br><br>

- OBJETIVO: Pegar a quantidade de recebimentos realizados por atendente no posto em que ele está alocado
a partir do id do posto passado como parâmetro da função.
    
    ```sql
    DROP FUNCTION IF EXISTS quantidade_recebimento_por_atendente(idPosto INTEGER);
    
    CREATE FUNCTION quantidade_recebimento_por_atendente(idPosto INTEGER)
    RETURNS TABLE("Registro Geral" VARCHAR(10), "Nome" VARCHAR(50), "Quantidade de Retiradas" BIGINT)
    AS $$
        SELECT ate.numeroregistro, pe.nome, COUNT(re.idatendente) FROM pessoa AS pe
        INNER JOIN atendente AS ate ON (ate.idpessoa = pe.idpessoa)
        INNER JOIN recebimento AS re ON (re.idatendente = ate.idpessoa)
        INNER JOIN medicamento_posto AS mp ON (mp.idmedicamentoposto = re.idmedicamentoposto)
        WHERE mp.idposto = $1
        GROUP BY ate.numeroregistro, pe.nome
        ORDER BY 3 DESC;
    $$
    LANGUAGE SQL;
    
    SELECT * FROM quantidade_recebimento_por_atendente(1);
    ```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Function%20quantidade_recebimento_por_atendente.png"></p><br><br>

- OBJETIVO: Pegar os medicamentos e sua quantidade em estoque a partir do id do posto passado como
parâmetro.
    
    ```sql
    DROP FUNCTION IF EXISTS medicamentos_postos(idPosto INTEGER);
    
    CREATE OR REPLACE FUNCTION medicamentos_postos(idPosto INTEGER)
    RETURNS TABLE("Medicamento" VARCHAR(100), "Quantidade" INTEGER, "Data de Vencimento" TIMESTAMP) AS 
        'SELECT me.nome, mp.quantidade, mp.datavencimento FROM medicamento AS me
        INNER JOIN medicamento_posto AS mp ON (mp.idmedicamento = me.idmedicamento)
        WHERE mp.idposto=$1
        ORDER BY me.nome;'
    LANGUAGE SQL;
    
    SELECT * FROM medicamentos_postos(3);
    ```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Function%20medicamentos_postos.png"></p><br><br>

- OBJETIVO: Filtrar pessoas registradas no banco de dados passando como parâmetro o nome.
    
    ```sql
    DROP FUNCTION IF EXISTS filtrar_pessoa(VARCHAR(30));
    
    CREATE FUNCTION filtrar_pessoa(VARCHAR(30))
    RETURNS SETOF pessoa 
    AS $$
        SELECT * FROM pessoa WHERE nome=$1;
    $$
    LANGUAGE SQL;
    
    SELECT * FROM filtrar_pessoa('Soraia Outeiro');
    ```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Function%20filtrar_pessoa.png"></p><br><br>


- OBJETIVO: Filtrar os dependentes pelo id do titular passado como parâmetro.
    
    ```sql
    DROP FUNCTION IF EXISTS filtrar_dependentes_pelo_idtitular(idTitular INTEGER);
    
    CREATE FUNCTION filtrar_dependentes_pelo_idtitular(idTitular INTEGER)
    RETURNS TABLE("Nome" VARCHAR(40), "Sexo" INTEGER, "Data de Nascimento" TIMESTAMP)
    AS $$
        SELECT pe.nome, pe.sexo, pe.datanascimento FROM pessoa AS pe
        INNER JOIN titular AS ti ON(ti.idpessoa = pe.idpessoa)
        INNER JOIN dependente AS de ON (de.idtitular = ti.idpessoa)
        WHERE de.idtitular = $1;
    $$
    LANGUAGE SQL;
    
    SELECT * FROM filtrar_dependentes_pelo_idtitular(32514);
    ```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Function%20filtrar_dependentes_pelo_idtitular.png"></p><br><br>

- OBJETIVO: É uma Assertion que só permite a atualização do estado do medicamento da tabela medicamento_posto para:
	Disponível: caso exista medicamentos no estoque, ou seja, coluna medicamento maior que zero;
	Indisponível: caso não exista medicamentos no estoque, ou seja, coluna medicamento igual a zero;
    
    OBS.: Lembrando que assertions não é implementada no Postgresql, logo é utilizada conjunto de triggers com functions
    para criar e simular uma Assertion.
    
    ```sql
    DROP FUNCTION IF EXISTS isValidMudancaEstado() CASCADE;
    
    CREATE FUNCTION isValidMudancaEstado() RETURNS TRIGGER AS
    $$ BEGIN
        IF (NEW.estadomedicamento = 1) THEN 
            IF (NEW.quantidade > 0) THEN
                RAISE EXCEPTION 'Erro: Não pode modificar estado do medicamento para INDISPONÍVEL porque existem medicamentos no estoque';
            END IF;
        ELSE
            IF (NEW.quantidade = 0) THEN
                RAISE EXCEPTION 'Erro: Não pode modificar estado do medicamento para DISPONÍVEL porque não existem medicamentos no estoque';
            END IF;
        END IF;
        RETURN NEW;
     END; $$
     LANGUAGE plpgsql;

    --Trigger que chama a função que permite ou não a mudança do estado de disponibilidade do medicamento
    CREATE TRIGGER tr_estado_medicamento
    BEFORE UPDATE OF estadomedicamento ON medicamento_posto
    FOR EACH ROW
    EXECUTE PROCEDURE isValidMudancaEstado();
    ```
- Testes da Assertion:
    
    ```sql
    /* Tentativa de atualizar o estado do medicamento para Indisponível(1) para todos medicamentos que possui 
    quantidade em estoque maior que zero, logo sendo algo incoerente que não pode ser permitido */
    
    UPDATE medicamento_posto SET estadomedicamento = 1 WHERE quantidade > 0;
    ```
    <p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Assertion%20Erro%20Update%201%20isvalidMudancaEstado().png"></p><br>
    
    ```sql
    /* Mesma tentativa que a anterior, porém tentando atualizar para Disponível(2) para todos medicamentos que
    não possui medicamentos disponíveis em estoque, ou seja, quantidade = 0 */
    
    UPDATE medicamento_posto SET estadomedicamento = 2 WHERE quantidade = 0;
    ```
    <p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Assertion%20Erro%20Update%202%20isvalidMudancaEstado().png"></p><br>
    
    ```sql
    -- O Update é realizado com sucesso porque segue as restrições discutidas anteriormente
    
    UPDATE medicamento_posto SET estadomedicamento = 2 WHERE quantidade > 0;
    UPDATE medicamento_posto SET estadomedicamento = 1 WHERE quantidade = 0;
    ```
    <p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Assertion%20Update%20OK%20isvalidMudancaEstado().png"></p><br><br>
    

- OBJETIVO: É uma Assertion que só permite a inserção de um novo dependente ao titular caso este não 
tenha 3 dependentes que é o máximo definido nas regras de negócio do sistema.

   OBS.: Lembrando que assertions não é implementada no Postgresql, logo é utilizada conjunto de triggers com functions
   para criar e simular uma Assertion.
    
    ```sql
    DROP FUNCTION IF EXISTS novo_dependente() CASCADE;
    CREATE FUNCTION novo_dependente() RETURNS TRIGGER AS
    $$ BEGIN
    IF EXISTS(
	   SELECT COUNT(idtitular) FROM dependente
	   WHERE idtitular = NEW.idtitular
	   GROUP BY idtitular
	   HAVING COUNT(idtitular) > 3
	) THEN 
		RAISE EXCEPTION 'Erro: O titular associado a este dependente já possui o número máximo de dependentes, ou seja, 3.';
	END IF;
	RETURN NULL;
     END; $$
     LANGUAGE plpgsql;

     -- Trigger que chama a função que permite a inserção ou não de um novo dependente
     CREATE TRIGGER tr_novo_dependente
     AFTER INSERT ON dependente
     FOR EACH ROW 
     EXECUTE PROCEDURE novo_dependente();
    ```    
- Testes da Assertion:

```sql
/* Não é possível fazer a inserção de um novo dependente associado a titular com id 79030 porque este já contém
três dependentes associados a ele */

INSERT INTO dependente(idpessoa, idtitular) VALUES(3, 79030);
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Assertion%20Erro%20Insertion%20novo_dependente().png"></p><br>

```sql
/* Nesse caso é possível inserir o novo dependente associado ao titular com id 86580 porque este
não contém três dependentes associados a ele */

INSERT INTO dependente(idpessoa, idtitular) VALUES(3, 86580);
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Assertion%20OK%20Insert%20novo_dependente.png"></p><br>


- OBJETIVO: Assertion que só permite a inserção de dados caso o titular tenha menos que 5 solicitações no estado 
COMUNICADO(1).

   OBS.: Lembrando que assertions não é implementada no Postgresql, logo é utilizada conjunto de triggers com functions
   para criar e simular uma Assertion.
    
```sql
DROP FUNCTION IF EXISTS verifica_solicitacao_estado_comunicado() CASCADE;
    
CREATE FUNCTION verifica_solicitacao_estado_comunicado() RETURNS TRIGGER AS
$$ BEGIN
	IF EXISTS(
	   SELECT COUNT(idtitular) FROM solicitacao
	   WHERE idtitular = NEW.idtitular AND estadosolicitacao = 1
	   GROUP BY idtitular
	   HAVING COUNT(idtitular) > 5
	) THEN 
		RAISE EXCEPTION 'Erro: Este titular já possui 5 solicitações no estado comunicado realizadas.';
	END IF;
	RETURN NULL;
END; $$
LANGUAGE plpgsql;

-- Trigger que chama a função que permite a nova solicitação da pessoa
CREATE TRIGGER tr_verifica_solicitacao_estado_comunicado
AFTER INSERT ON solicitacao
FOR EACH ROW
EXECUTE PROCEDURE verifica_solicitacao_estado_comunicado();
```    
- Testes da Assertion:

```sql
/* O titular de id 86190 já possui o número de solicitações máximas definidas como regra de negócio do sistema, não
podendo realizar uma nova solicitação */

INSERT INTO solicitacao(idsolicitacao, data_hora, quantidademedicamento, estadosolicitacao, idtitular, idmedicamentoposto)
VALUES(1500005, now(), 3, 1, 86190, 54);
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Assertion%20Falha%20verifica_solicitado_estado_comunicado.png"></p><br>

```sql
/* O titular de id 68230 possui menos que 5 solicitações no estado comunicado, logo ele pode fazer uma nova solicitação */

INSERT INTO solicitacao(idsolicitacao, data_hora, quantidademedicamento, estadosolicitacao, idtitular, idmedicamentoposto)
VALUES(1500006, now(), 43, 1, 68230, 23);
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Assertion%20OK%20Assertion%20Falha%20verifica_solicitado_estado_comunicado().png"></p><br>


- OBJETIVO: É uma trigger que quando a quantidade é alterada de zero para maior que zero e vice-versa é mudado
o estadomedicamento automaticamente. Nesse caso, quando quantidade é zero o estadomedicamento vai para 1, ou seja,
indisponível. Caso contrário o estadomedicamento se torna 2, ou seja, disponível.
    
```sql
CREATE FUNCTION muda_estado_medicamento_basedon_quantidade() RETURNS TRIGGER AS
$$ BEGIN
	IF (NEW.quantidade > 0) THEN 
	    IF (NEW.estadomedicamento = 1) THEN
		UPDATE medicamento_posto SET estadomedicamento = 2 WHERE NEW.idmedicamentoposto = idmedicamentoposto;
	    END IF;
	ELSE
	    IF (NEW.estadomedicamento = 2) THEN
	        UPDATE medicamento_posto SET estadomedicamento = 1 WHERE NEW.idmedicamentoposto = idmedicamentoposto;
	    END IF;
	END IF;
	RETURN NEW;
END; $$
LANGUAGE plpgsql;

-- Trigger que chama a função responsável pelo update do estado medicamento com a mudança da quantidade
CREATE TRIGGER tr_muda_estado_medicamento_basedon_quantidade
AFTER INSERT OR UPDATE OF quantidade ON medicamento_posto
FOR EACH ROW
EXECUTE PROCEDURE muda_estado_medicamento_basedon_quantidade();
```    
- Testes da Trigger:

```sql
/* Select de 5 medicamentos posto em seu estado inicial sem mudança de medicamentos */

SELECT idmedicamentoposto, estadomedicamento, quantidade FROM medicamento_posto WHERE idmedicamentoposto >= 1 AND idmedicamentoposto <= 5;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Trigger%20estado%20inicial%20da%20tabela%20medicamento_posto.png"></p><br>

```sql
/* Quando a quantidade muda de zero para maior que zero então o estadomedicamento muda para disponível automaticamente
devido a trigger, onde muda o estadomedicamento para disponível(2) do idmedicamentoposto 2 */

UPDATE medicamento_posto SET quantidade = 45 WHERE idmedicamentoposto = 2;
SELECT idmedicamentoposto, estadomedicamento, quantidade FROM medicamento_posto WHERE idmedicamentoposto >= 1 AND idmedicamentoposto <= 5;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Trigger%20mudan%C3%A7a%20de%20estado%201.png"></p><br>

```sql
/* Quando a quantidade muda um valor maior que zero para zero então o estadomedicamento muda automaticamente para
indisponível devido a trigger, onde muda o estadomedicamento para indisponível(1) do idmedicamentoposto 1 */

UPDATE medicamento_posto SET quantidade = 0 WHERE idmedicamentoposto = 1;
SELECT idmedicamentoposto, estadomedicamento, quantidade FROM medicamento_posto WHERE idmedicamentoposto >= 1 AND idmedicamentoposto <= 5;
```
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Tabelas%20e%20Principais%20Consultas/Functions%2C%20Triggers%20e%20Assertions/Trigger%20mudan%C3%A7a%20de%20estado%202.png"></p><br>



## Data de Entrega: (27/09/2018)

#### 9.5	Administração do banco de dados<br>
        Descrição detalhada sobre como serão executadas no banco de dados as
        seguintes atividades.
        a) Segurança e autorização de acesso: especificação básica de configurações de acesso remoto
        b) Estimativas de aquisição de recursos para armazenamento e processamento da informação
        c) Planejamento de rotinas de manutenção e monitoramento do banco
        d) Plano com frequencia de análises visando otimização de performance
<br>

<p>
A) A população do município de Fundão, região em que a primeira versão do sistema está focada, está estimada em 20.757 habitantes. Considerando todos esses cidadãos como potenciais utilizadores do sistema, deve ser tratada a questão da segurança dos dados e de acesso ao sistema com as devidas autorizações de acesso e administração dos cadastros. Funcionários do Sistema Único de Saúde deverão ter acesso a uma área do sistema que administra a entrada e saída dos medicamentos, assim como autorização da retirada destes. Cidadãos titulares poderão fazer a requisição e retirada do medicamento e dependentes terão apenas autorização de retirada dos remédios. Na versão inicial haverá um grupo apenas de fundão, e na eventual inclusão de outros municípios, cada município teria seu próprio grupo no sistema independente um do outro. <br>
Os papéis dos usuários envolvem as seguintes roles:
	<br>* Atendente: possuem as permissões de administração dos medicamentos, ou seja, registros de medicamentos e pacientes no
	sistema, assim como controle do fluxo de entrada e saída de medicamentos e também a geração de relatórios importantes do
	sistema.
	<br>* Paciente: basicamente possuem permissões de realizar requisições e retirada de medicamentos, onde seus dependentes terão
	apenas a autorização de retirada de medicamentos.
	<br>* Superuser: possuem todas as permissões possíveis do sistema, tanto no subsistema de atendimento à população quanto no
	subsistema de controle de estoque. Logo este tipo de usuário são os programadores que desenvolvem o sistema e necessitam
	de todas essas permissões.
</p>
<p>
B) Considerando que teriamos acesso ao número de consultas no Sistema Único de Saúde caso o projeto estivesse sendo desenvolvido com colaboração do município, poderiamos analizar o número semanal ou até diário de requisições de remédio do sistema, e por consequência esperar um tráfego de dados que acompanhe essa estatística, portanto recursos para o processamento de busca de remedios e abertura e fechamento de requisições devem levar esses dados em conta, para evitar o mal funcionamento ou até negação de serviço devido ao tráfego de dados elevado.
</p>
<p>
C) Normalmente procura-se garantir um balanço entre a manutenção correta do banco de dados e um custo reduzido pertinente a frequência dessa manutenção. Visto que a perda de dados referente ao uso de medicamentos pode atrasar e complicar ainda mais a situação de um paciente, opta-se por um monitoramento semanal para evitar essas perdas ao máximo.
</p>
<p>
D) A análise de performance do banco não necessita ter a mesma frequência de seu monitoramento e manutenção, visto que não causa as mesmas complicações. Uma solução proposta para esse caso é ter uma frequência inicial semanal e espaçar para mensal depois de um periodo de observação.
</p>

#### 9.6	GERACAO DE DADOS (MÍNIMO DE 1,5 MILHÃO DE REGISTROS PARA PRINCIPAL RELAÇAO)<br>
Todas as inserções de dados nas tabelas do banco<br><br>
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Testes%20de%20performance/estatisticas.png"></p><br>

Tempo de inserção dos dados de todas as tabelas.<br><br>
<p align="center"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/tempo-insert.png?raw=true"></p><br>
        
## Data de Entrega: (31/10/2018)

#### 9.7	Backup do Banco de Dados<br>
	Tempo de backup - 13.690858 segundos
	Tamanho - 21,3 MB
	Tempo de restauração - 24.970678 segundos
<br>

```
pg_dump: last built-in OID is 16383
pg_dump: reading extensions
pg_dump: identifying extension members
pg_dump: reading schemas
pg_dump: reading user-defined tables
pg_dump: reading user-defined functions
pg_dump: reading user-defined types
pg_dump: reading procedural languages
pg_dump: reading user-defined aggregate functions
pg_dump: reading user-defined operators
pg_dump: reading user-defined access methods
pg_dump: reading user-defined operator classes
pg_dump: reading user-defined operator families
pg_dump: reading user-defined text search parsers
pg_dump: reading user-defined text search templates
pg_dump: reading user-defined text search dictionaries
pg_dump: reading user-defined text search configurations
pg_dump: reading user-defined foreign-data wrappers
pg_dump: reading user-defined foreign servers
pg_dump: reading default privileges
pg_dump: reading user-defined collations
pg_dump: reading user-defined conversions
pg_dump: reading type casts
pg_dump: reading transforms
pg_dump: reading table inheritance information
pg_dump: reading event triggers
pg_dump: finding extension tables
pg_dump: finding inheritance relationships
pg_dump: reading column info for interesting tables
pg_dump: finding the columns and types of table "public.atendente"
pg_dump: finding the columns and types of table "public.bairro"
pg_dump: finding the columns and types of table "public.dependente"
pg_dump: finding the columns and types of table "public.estado"
pg_dump: finding the columns and types of table "public.laboratorio"
pg_dump: finding the columns and types of table "public.medicamento"
pg_dump: finding the columns and types of table "public.medicamento_laboratorio"
pg_dump: finding the columns and types of table "public.medicamento_posto"
pg_dump: finding the columns and types of table "public.municipio"
pg_dump: finding the columns and types of table "public.pessoa"
pg_dump: finding the columns and types of table "public.posto"
pg_dump: finding the columns and types of table "public.recebimento"
pg_dump: finding the columns and types of table "public.registro_medicamento"
pg_dump: finding the columns and types of table "public.solicitacao"
pg_dump: finding the columns and types of table "public.titular"
pg_dump: flagging inherited columns in subtables
pg_dump: reading indexes
pg_dump: reading indexes for table "public.atendente"
pg_dump: reading indexes for table "public.bairro"
pg_dump: reading indexes for table "public.dependente"
pg_dump: reading indexes for table "public.estado"
pg_dump: reading indexes for table "public.laboratorio"
pg_dump: reading indexes for table "public.medicamento"
pg_dump: reading indexes for table "public.medicamento_laboratorio"
pg_dump: reading indexes for table "public.medicamento_posto"
pg_dump: reading indexes for table "public.municipio"
pg_dump: reading indexes for table "public.pessoa"
pg_dump: reading indexes for table "public.posto"
pg_dump: reading indexes for table "public.recebimento"
pg_dump: reading indexes for table "public.registro_medicamento"
pg_dump: reading indexes for table "public.solicitacao"
pg_dump: reading indexes for table "public.titular"
pg_dump: reading extended statistics
pg_dump: reading constraints
pg_dump: reading foreign key constraints for table "public.atendente"
pg_dump: reading foreign key constraints for table "public.bairro"
pg_dump: reading foreign key constraints for table "public.dependente"
pg_dump: reading foreign key constraints for table "public.estado"
pg_dump: reading foreign key constraints for table "public.laboratorio"
pg_dump: reading foreign key constraints for table "public.medicamento"
pg_dump: reading foreign key constraints for table "public.medicamento_laboratorio"
pg_dump: reading foreign key constraints for table "public.medicamento_posto"
pg_dump: reading foreign key constraints for table "public.municipio"
pg_dump: reading foreign key constraints for table "public.pessoa"
pg_dump: reading foreign key constraints for table "public.posto"
pg_dump: reading foreign key constraints for table "public.recebimento"
pg_dump: reading foreign key constraints for table "public.registro_medicamento"
pg_dump: reading foreign key constraints for table "public.solicitacao"
pg_dump: reading foreign key constraints for table "public.titular"
pg_dump: reading triggers
pg_dump: reading triggers for table "public.atendente"
pg_dump: reading triggers for table "public.bairro"
pg_dump: reading triggers for table "public.dependente"
pg_dump: reading triggers for table "public.estado"
pg_dump: reading triggers for table "public.laboratorio"
pg_dump: reading triggers for table "public.medicamento"
pg_dump: reading triggers for table "public.medicamento_laboratorio"
pg_dump: reading triggers for table "public.medicamento_posto"
pg_dump: reading triggers for table "public.municipio"
pg_dump: reading triggers for table "public.pessoa"
pg_dump: reading triggers for table "public.posto"
pg_dump: reading triggers for table "public.recebimento"
pg_dump: reading triggers for table "public.registro_medicamento"
pg_dump: reading triggers for table "public.solicitacao"
pg_dump: reading triggers for table "public.titular"
pg_dump: reading rewrite rules
pg_dump: reading policies
pg_dump: reading row security enabled for table "public.atendente"
pg_dump: reading policies for table "public.atendente"
pg_dump: reading row security enabled for table "public.bairro"
pg_dump: reading policies for table "public.bairro"
pg_dump: reading row security enabled for table "public.dependente"
pg_dump: reading policies for table "public.dependente"
pg_dump: reading row security enabled for table "public.estado"
pg_dump: reading policies for table "public.estado"
pg_dump: reading row security enabled for table "public.laboratorio"
pg_dump: reading policies for table "public.laboratorio"
pg_dump: reading policies for table "public.medicamento"
pg_dump: reading row security enabled for table "public.medicamento_laboratorio"
pg_dump: reading policies for table "public.medicamento_laboratorio"
pg_dump: reading row security enabled for table "public.medicamento_posto"
pg_dump: reading policies for table "public.medicamento_posto"
pg_dump: reading row security enabled for table "public.municipio"
pg_dump: reading policies for table "public.municipio"
pg_dump: reading row security enabled for table "public.pessoa"
pg_dump: reading policies for table "public.pessoa"
pg_dump: reading row security enabled for table "public.posto"
pg_dump: reading policies for table "public.posto"
pg_dump: reading row security enabled for table "public.recebimento"
pg_dump: reading policies for table "public.recebimento"
pg_dump: reading row security enabled for table "public.registro_medicamento"
pg_dump: reading policies for table "public.registro_medicamento"
pg_dump: reading row security enabled for table "public.solicitacao"
pg_dump: reading policies for table "public.solicitacao"
pg_dump: reading row security enabled for table "public.titular"
pg_dump: reading policies for table "public.titular"
pg_dump: reading publications
pg_dump: reading publication membership
pg_dump: reading subscriptions
pg_dump: reading large objects
pg_dump: reading dependency data
pg_dump: saving encoding = UTF8
pg_dump: saving standard_conforming_strings = on
pg_dump: saving search_path = 
pg_dump: saving database definition
pg_dump: dumping contents of table "public.atendente"
pg_dump: dumping contents of table "public.bairro"
pg_dump: dumping contents of table "public.dependente"
pg_dump: dumping contents of table "public.estado"
pg_dump: dumping contents of table "public.laboratorio"
pg_dump: dumping contents of table "public.medicamento"
pg_dump: dumping contents of table "public.medicamento_laboratorio"
pg_dump: dumping contents of table "public.medicamento_posto"
pg_dump: dumping contents of table "public.municipio"
pg_dump: dumping contents of table "public.pessoa"
pg_dump: dumping contents of table "public.posto"
pg_dump: dumping contents of table "public.recebimento"
pg_dump: dumping contents of table "public.registro_medicamento"
pg_dump: dumping contents of table "public.solicitacao"
pg_dump: dumping contents of table "public.titular"
pg_dump: reading policies for table "public.medicamento"
pg_dump: reading row security enabled for table "public.medicamento_laboratorio"
pg_dump: reading policies for table "public.medicamento_laboratorio"
pg_dump: reading row security enabled for table "public.medicamento_posto"
pg_dump: reading policies for table "public.medicamento_posto"
pg_dump: reading row security enabled for table "public.municipio"
pg_dump: reading policies for table "public.municipio"
pg_dump: reading row security enabled for table "public.pessoa"
pg_dump: reading policies for table "public.pessoa"
pg_dump: reading row security enabled for table "public.posto"
pg_dump: reading policies for table "public.posto"
pg_dump: reading row security enabled for table "public.recebimento"
pg_dump: reading policies for table "public.recebimento"
pg_dump: reading row security enabled for table "public.registro_medicamento"
pg_dump: reading policies for table "public.registro_medicamento"
pg_dump: reading row security enabled for table "public.solicitacao"
pg_dump: reading policies for table "public.solicitacao"
pg_dump: reading row security enabled for table "public.titular"
pg_dump: reading policies for table "public.titular"
pg_dump: reading publications
pg_dump: reading publication membership
pg_dump: reading subscriptions
pg_dump: reading large objects
pg_dump: reading dependency data
pg_dump: saving encoding = UTF8
pg_dump: saving standard_conforming_strings = on
pg_dump: saving search_path = 
pg_dump: saving database definition
pg_dump: dumping contents of table "public.atendente"
pg_dump: dumping contents of table "public.bairro"
pg_dump: dumping contents of table "public.dependente"
pg_dump: dumping contents of table "public.estado"
pg_dump: dumping contents of table "public.laboratorio"
pg_dump: dumping contents of table "public.medicamento"
pg_dump: dumping contents of table "public.medicamento_laboratorio"
pg_dump: dumping contents of table "public.medicamento_posto"
pg_dump: dumping contents of table "public.municipio"
pg_dump: dumping contents of table "public.pessoa"
pg_dump: dumping contents of table "public.posto"
pg_dump: dumping contents of table "public.recebimento"
pg_dump: dumping contents of table "public.registro_medicamento"
pg_dump: dumping contents of table "public.solicitacao"
pg_dump: dumping contents of table "public.titular"
```
	
				Script de backup do banco
		

```
pg_restore: connecting to database for restore
pg_restore: creating SCHEMA "public"
pg_restore: creating COMMENT "SCHEMA public"
pg_restore: creating EXTENSION "plpgsql"
pg_restore: creating COMMENT "EXTENSION plpgsql"
pg_restore: creating TABLE "public.atendente"
pg_restore: creating TABLE "public.bairro"
pg_restore: creating TABLE "public.dependente"
pg_restore: creating TABLE "public.estado"
pg_restore: creating TABLE "public.laboratorio"
pg_restore: creating TABLE "public.medicamento"
pg_restore: creating TABLE "public.medicamento_laboratorio"
pg_restore: creating TABLE "public.medicamento_posto"
pg_restore: creating TABLE "public.municipio"
pg_restore: creating TABLE "public.pessoa"
pg_restore: creating TABLE "public.posto"
pg_restore: creating TABLE "public.recebimento"
pg_restore: creating TABLE "public.registro_medicamento"
pg_restore: creating TABLE "public.solicitacao"
pg_restore: creating TABLE "public.titular"
pg_restore: processing data for table "public.atendente"
pg_restore: processing data for table "public.bairro"
pg_restore: processing data for table "public.dependente"
pg_restore: processing data for table "public.estado"
pg_restore: processing data for table "public.laboratorio"
pg_restore: processing data for table "public.medicamento"
pg_restore: processing data for table "public.medicamento_laboratorio"
pg_restore: processing data for table "public.medicamento_posto"
pg_restore: processing data for table "public.municipio"
pg_restore: processing data for table "public.pessoa"
pg_restore: processing data for table "public.posto"
pg_restore: processing data for table "public.recebimento"
pg_restore: processing data for table "public.registro_medicamento"
pg_restore: processing data for table "public.solicitacao"
pg_restore: processing data for table "public.titular"
pg_restore: creating CONSTRAINT "public.pessoa PK_103e8f7f4ebf0ca871bbe4f8a3c"
pg_restore: creating CONSTRAINT "public.bairro PK_4fdaa48a8d5b79bfc8f5959251a"
pg_restore: creating CONSTRAINT "public.titular PK_52a860fd27254e95d135301b989"
pg_restore: creating CONSTRAINT "public.medicamento_posto PK_55f589d48cf08820e62c4218619"
pg_restore: creating CONSTRAINT "public.recebimento PK_746650b7410a8cea3f66aa08e96"
pg_restore: creating CONSTRAINT "public.dependente PK_7b83dfffedd25cb7a7befe84b70"
pg_restore: creating CONSTRAINT "public.estado PK_81df0554baeeb3c342378a627ad"
pg_restore: creating CONSTRAINT "public.municipio PK_9288f1d12a5d8150c355b5e9b16"
pg_restore: creating CONSTRAINT "public.laboratorio PK_a02d191f1adefa1e3c2b21ef553"
pg_restore: creating CONSTRAINT "public.atendente PK_a5b0986f6decfe7ce7d287a8afc"
pg_restore: creating CONSTRAINT "public.medicamento PK_c9eba17e6634c1e256d21d9ff33"
pg_restore: creating CONSTRAINT "public.registro_medicamento PK_caa0afb5240252ec27258f685d5"
pg_restore: creating CONSTRAINT "public.posto PK_cc32119736b40c091e8bb97c554"
pg_restore: creating CONSTRAINT "public.medicamento_laboratorio PK_df376ac8b15a58f4693f765dbc7"
pg_restore: creating CONSTRAINT "public.solicitacao PK_ffd64b9cb2dfb73cf046c16907a"
pg_restore: creating CONSTRAINT "public.pessoa UQ_70e82a4695f07a6ce61fc9492b6"
pg_restore: creating CONSTRAINT "public.atendente UQ_a134eaf7339d2c607039333f008"
pg_restore: creating CONSTRAINT "public.pessoa UQ_ee80cc840596cc1bca8a149bcd5"
pg_restore: creating FK CONSTRAINT "public.municipio FK_00033fc05927f355f13fe4aabe6"
pg_restore: creating FK CONSTRAINT "public.medicamento_posto FK_34211f805b13249a304d0490fb3"
pg_restore: creating FK CONSTRAINT "public.recebimento FK_387e9892097e16f9ddd2ae3bf22"
pg_restore: creating FK CONSTRAINT "public.recebimento FK_475829d5c50c3859ce7ccb37646"
pg_restore: creating FK CONSTRAINT "public.dependente FK_485eec223866b705db1569e7b3f"
pg_restore: creating FK CONSTRAINT "public.titular FK_52a860fd27254e95d135301b989"
pg_restore: creating FK CONSTRAINT "public.atendente FK_590cc4410853d91b70266bdfde0"
pg_restore: creating FK CONSTRAINT "public.medicamento_laboratorio FK_59f71b7b9ec062ef9be80f527f0"
pg_restore: creating FK CONSTRAINT "public.bairro FK_6ac866ccb173b3b7698a49541ff"
pg_restore: creating FK CONSTRAINT "public.dependente FK_7b83dfffedd25cb7a7befe84b70"
pg_restore: creating FK CONSTRAINT "public.atendente FK_a5b0986f6decfe7ce7d287a8afc"
pg_restore: creating FK CONSTRAINT "public.posto FK_c52dd314fd94874d9d261059c2e"
pg_restore: creating FK CONSTRAINT "public.registro_medicamento FK_c6c78ca2cfd73ad0dbdafcc5005"
pg_restore: creating FK CONSTRAINT "public.solicitacao FK_d38b3913472dde9e8bdd6c7f15f"
pg_restore: creating FK CONSTRAINT "public.medicamento_laboratorio FK_d8109f3516752ce13ee32b692ce"
pg_restore: creating FK CONSTRAINT "public.recebimento FK_ddf1939ef15cc85d043eecb2d88"
pg_restore: creating FK CONSTRAINT "public.medicamento_posto FK_e12054ea5e6bedd76415f02b4bb"
pg_restore: creating FK CONSTRAINT "public.registro_medicamento FK_e7076e84095a8abb5cff10db3b0"
pg_restore: creating FK CONSTRAINT "public.solicitacao FK_f61371e9c058a6d9c9ab83d99fa"
```
				
				Script sql de restauração do banco
       
<br>


#### 9.8	APLICAÇAO DE ÍNDICES E TESTES DE PERFORMANCE<br>
Todos os testes de performance que inclui a criação de índices estão presentes no link da apresentação abaixo:<br>
[Link dos slides dos testes de perfomance.](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Apresenta%C3%A7%C3%B5es/Apresenta%C3%A7%C3%A3o%20BD2%20-%20Perfomances%20Indices.pdf)<br>

<p align="center"><a href="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Apresenta%C3%A7%C3%B5es/Apresenta%C3%A7%C3%A3o%20BD2%20-%20Perfomances%20Indices.pdf"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Imagens/Apresenta%C3%A7%C3%A3o%20Perfomances%20%C3%8Dndices.png"></a><figcaption style="text-align: center; font-size: 13px; font-weight: bold;"></figcaption></p><br>


#### 9.85	RELATÓRIOS COM JÚPITER<br>
Todos os testes e relatórios gerados estão presentes no link abaixo:<br>
[Link dos testes e geração dos relatórios na aplicação Júpiter.](https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Relat%C3%B3rio%20J%C3%BApiter/BD2_relatorios.ipynb)<br>

<p align="center"><a href="<p align="center"><a href="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Relat%C3%B3rio%20J%C3%BApiter/BD2_relatorios.ipynb"><img src="https://github.com/lukasg18/Topicos-Trabalho-BD2/blob/master/Relat%C3%B3rio%20J%C3%BApiter/Relat%C3%B3rio%20J%C3%BApiter.PNG"></a><figcaption style="text-align: center; font-size: 13px; font-weight: bold;">


## Data de Entrega: (22/11/2018)

<br>   

#### 9.9 TRABALHO EM DUPLA - Machine Learning e Data Mining
### Estudar algum dos algoritmos abaixo
### Incluir no trabalho os seguintes tópicos: 
* Explicação/Fundamentação teórica sobre o método, objetivos e restrições! (formato doc/odt ou PDF)
* Onde/quando aplicar 
> ##### Estudar e explicar artigo que aplique o método de mineração de dados/machine learning escolhido
* exemplo de uso/aplicação 
> ##### a) Implementar algoritmo de básico de exemplo obtido na literatura (enviar código executável junto do trabalho com detalhamento de explicação para uso passo a passo)
> #####  b) Aplicar em alguma base de dados aberta (governamental ou sites de datasets disponíveis), registrar e apresentar resultados e algoritmo desenvolvido.

Exemplos de métodos/algoritmos a serem estudados
* "Nearest Neighbors" 
* "Linear SVM" 
* "RBF SVM" 
* "Decision Tree" 
* "Random Forest"
* Pca  
* "Naive Bayes"
<br>
Referência: http://scikit-learn.org/stable/index.html
<br>
Referências adicionais:
Scikit learning Map : http://scikit-learn.org/stable/tutorial/machine_learning_map/index.html
Machine learning in Python with scikit-learn: https://www.youtube.com/playlist?list=PL5-da3qGB5ICeMbQuqbbCOQWcS6OYBr5A



<br>

## Data de Entrega: (06/12/2018)


### 10	ATUALIZAÇÃO DA DOCUMENTAÇÃO/ SLIDES E ENTREGA FINAL<br>
       
### 11  FORMATACAO NO GIT: https://help.github.com/articles/basic-writing-and-formatting-syntax/
<comentario no git>
    
##### About Formatting
    https://help.github.com/articles/about-writing-and-formatting-on-github/
    
##### Basic Formatting in Git
    
    https://help.github.com/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests
    
    
##### Working with advanced formatting
    https://help.github.com/articles/working-with-advanced-formatting/
#### Mastering Markdown
    https://guides.github.com/features/mastering-markdown/

### OBSERVAÇÕES IMPORTANTES

#### Todos os arquivos que fazem parte do projeto (Imagens, pdfs, arquivos fonte, etc..), devem estar presentes no GIT. Os arquivos do projeto vigente não devem ser armazenados em quaisquer outras plataformas.
1. Caso existam arquivos com conteúdos sigilosos, comunicar o professor que definirá em conjunto com o grupo a melhor forma de armazenamento do arquivo.

#### Todos os grupos deverão fazer Fork deste repositório e dar permissões administrativas ao usuário deste GIT, para acompanhamento do trabalho.

#### Os usuários criados no GIT devem possuir o nome de identificação do aluno (não serão aceitos nomes como Eu123, meuprojeto, pro456, etc). Em caso de dúvida comunicar o professor.


Link para BrModelo:<br>
http://sis4.com/brModelo/brModelo/download.html
<br>


Link para curso de GIT<br>
![https://www.youtube.com/curso_git](https://www.youtube.com/playlist?list=PLo7sFyCeiGUdIyEmHdfbuD2eR4XPDqnN2?raw=true "Title")



