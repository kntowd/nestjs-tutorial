import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CorsMiddleware } from './common/middleware/cors.middleware';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  // middleware設定用関数
  configure(consumer: MiddlewareConsumer) {
    // forRoutesは必須
    consumer.apply(LoggerMiddleware, CorsMiddleware).forRoutes('*');
  }
}
