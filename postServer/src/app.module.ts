import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blogModule';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'blog-user',
      password: '1234',
      database: 'blog_app',
      entities: ["dist/**/*Entity{.ts,.js}"],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
