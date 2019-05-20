import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { TopicService } from './topic.service';


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
    @Put(':id')
    async update(
        @Body() body,
        @Param() {id}
    ) {
        console.log(body, id)
        return await this.topicSrevice.update(id, body.title);
    }
    @Delete(':id')
    async del(
        @Param() {id}
    ) {
        return await this.topicSrevice.del(id);
    }
}
