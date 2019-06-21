import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './comment.shema';
import { CommentController } from './comment.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }])],
    controllers: [CommentController],
    providers: [CommentService]
})
export class CommentModule {}
