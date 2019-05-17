import { Controller, Post, Body, Get } from '@nestjs/common';
import { TopicService } from './topic.service';
import { get } from 'http';

@Controller('topic')
export class TopicController {

    constructor(
        public topicSrevice: TopicService
    ) {}

    @Get()
    async index() {
        return await this.topicSrevice.fetchAll();
    }


    @Post()
    async store(
        @Body() body
    ) {
        console.log(body)
        return await this.topicSrevice.create(body)
    }
}
