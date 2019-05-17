import 'reflect-metadata';
import {NestFactory} from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication,} from '@nestjs/platform-fastify';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ValidationPipe} from '@nestjs/common';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const options = new DocumentBuilder()
    .setTitle('Pharmacy')
    .setDescription('Pharmacy Doc description')
    .setVersion('1.0')
    .addTag('Pharmacy')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 8080, '0.0.0.0');
}

bootstrap();
