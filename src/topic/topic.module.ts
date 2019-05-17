import { Module } from '@nestjs/common';
import { TopicController } from './topic.controller';
import { TopicService } from './topic.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicSchema } from './topic.schema';
import { TodoShema } from '../todos/todo.shema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Topic', schema: TopicSchema }, { name: 'Todo', schema: TodoShema}])],
  controllers: [TopicController],
  providers: [TopicService]
})
export class TopicModule {}
