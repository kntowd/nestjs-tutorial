import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './cats/customPipe/validation.pipe';
import { cors } from './common/middleware/cors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全てのルーティングに反映させるミドルウェア
  app.use(cors);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
