import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { cors } from './common/middleware/cors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
