import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Publicamas API V1')
    .setDescription('Publicamas API documentation')
    .setVersion('1.0.0')
    .addTag('Publicamas')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/swagger', app, document);
  await app.listen(10101);
}
bootstrap();