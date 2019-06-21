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
        console.log(todo)
        const createTodo = await this.todoModel({
            name: todo.name,
            complete: false,
            topicId: todo.topic._id,
            description: ''
        })

        return await createTodo.save();
    }

    async fetchAll(): Promise<Todos[]> {
        return (await this.todoModel.find().exec()).reverse();
    }

    async fetchByTopicId(topicId) {
        return await this.todoModel.find({topicId}).exec();
    }

    async fetchById(_id) {
        return await this.todoModel.findOne({_id}).exec();
    }

    async changeSatus(_id, complete) {
        return await this.todoModel.updateOne({_id}, {complete}).exec();
    }

    async del(_id) {
        return await this.todoModel.deleteOne({_id}).exec();
    }

    async update(_id, data) {
        return await this.todoModel.updateOne({_id}, {...data}).exec();
    }
}
