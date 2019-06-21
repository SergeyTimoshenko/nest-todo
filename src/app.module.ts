import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosController } from './todos/todos.controller';
import { TodosModule } from './todos/todos.module';
import { TopicModule } from './topic/topic.module';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/trelo'), TodosModule, TopicModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
