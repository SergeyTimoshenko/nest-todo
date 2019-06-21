import { Controller, Post, Body, Get, Put, Param, Delete, Patch } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(
        public todosService: TodosService
    ) {}
    
    @Get()
    async index() {
        return await this.todosService.fetchAll();
    }

    @Get(':topicId')
    async getByTopicId(
        @Param() { topicId }
    ) {
        return await this.todosService.fetchByTopicId(topicId);
    }

    @Get('task/:id')
    async getById(
        @Param() { id }
    ) {
        return await this.todosService.fetchById(id);
    }

    @Post()
    async store(
        @Body() body
    ) {
        
        const todo = await this.todosService.create(body)

        return todo;
    }

    @Put(':id')
    async update(
        @Body() body,
        @Param() params
    ) {
        return await this.todosService.changeSatus(params.id, body.status)
    }

    @Patch(':id')
    async patch(
        @Body() body,
        @Param() {id}
    ) {
        return await this.todosService.update(id, body)
    }

    @Delete(':id')
    async del(
        @Param() { id }
    ) {
        return await this.todosService.del(id);
    }
}
