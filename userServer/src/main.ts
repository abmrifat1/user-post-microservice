import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import {UserModule} from './user/user.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


const logger = new Logger('Main');

const microserviceOptions = {
  transport : Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8080,
  },
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder().setTitle('Post service')
  .setDescription('post micro-service api implementation.')
  .setVersion('1.0.0').build();

const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('doc', app, document);

  await app.listen(3000);

  const user = await NestFactory.createMicroservice(UserModule, microserviceOptions);
  user.listen(() => {
    logger.log('Micro-service is running....');
  })
}
bootstrap();
