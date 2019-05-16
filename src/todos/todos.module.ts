import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoShema } from './todo.shema';
import { TodosService } from './todos.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoShema }])],
    controllers: [TodosController],
    providers: [TodosService]
})
export class TodosModule {}
