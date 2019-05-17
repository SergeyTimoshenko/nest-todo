import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Topic } from './topic.interface';
import { Model } from 'mongoose';

@Injectable()
export class TopicService {
    constructor(
        @InjectModel('Topic') private readonly topicModel: Model<Topic>
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
}
