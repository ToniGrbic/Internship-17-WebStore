import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartsModule } from './carts/cart-items.module';
import { RateLimiterMiddleware } from './middleware/limiter.middleware';
import { OrdersModule } from './orders/orders.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { WishlistsModule } from './wishlists/wishlists.module';

@Module({
  imports: [
    PrismaModule,
    ProductsModule,
    UsersModule,
    OrdersModule,
    CartsModule,
    WishlistsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'Frontend', 'dist'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply the logger middleware globally to all routes
    consumer.apply(RateLimiterMiddleware).forRoutes('*');
  }
}
