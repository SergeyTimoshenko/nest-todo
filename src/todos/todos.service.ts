import { Injectable } from '@nestjs/common';
import { Todos } from './todos.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodosService {
    constructor(
        @InjectModel('Todo') private readonly todoModel: Model<Todos>
    ) {}
    async create(todo) {
        const createTodo = await this.todoModel({
            name: todo.name,
            complete: false
        })

        return await createTodo.save();
    }

    async fetchAll(): Promise<Todos[]> {
        return (await this.todoModel.find().exec()).reverse();
    }

    async changeSatus(_id, complete) {
        return await this.todoModel.updateOne({_id}, {complete}).exec();
    }
}
