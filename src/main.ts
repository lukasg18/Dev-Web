import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Rotas do projeto')
    .setDescription('todas as rotas referentes ao trabalho')
    .setVersion('1.0')
    .addTag('poo')
    .setSchemes('https', 'http')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  app.use(cors());
  await app.listen(parseInt(process.env.PORT) || 3001);
}
bootstrap();
