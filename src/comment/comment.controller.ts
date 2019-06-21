import { Controller, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(
        public commentService: CommentService
        ) {}
    @Get()
    async getAll() {
        return await this.commentService.fetchAll();
    }

    @Get(':id')
    async findOne(
        @Param() { id }
    ) {
        return await this.commentService.fetchOne(id);
    }

    @Put(':id')
    async update(
        @Param() { id },
        @Body() body
    ) {
        return await this.commentService.update(id, body);
    }

    @Delete(':id')
    async delete(
        @Param() { id }
    ) {
        return await this.commentService.delete(id);
    }
}
