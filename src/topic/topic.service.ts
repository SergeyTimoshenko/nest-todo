import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './topic.interface';
import { Model } from 'mongoose';
import { Todos } from '../todos/todos.interface';

@Injectable()
export class TopicService {
    constructor(
        @InjectModel('Topic') private readonly topicModel: Model<Topic>,
        @InjectModel('Todo') private readonly todoModel: Model<Todos>
    ) {}
    
    async create(topic: Topic) {
        const createTopic = await this.topicModel({
            title: topic.title
        });
        return await createTopic.save();
    }

    async fetchAll() {
        return await this.topicModel.find().exec();
    }

    async update(_id, title) {
        return await this.topicModel.updateOne({_id}, {title}).exec();
    }
}
