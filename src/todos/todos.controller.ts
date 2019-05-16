import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
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
}
