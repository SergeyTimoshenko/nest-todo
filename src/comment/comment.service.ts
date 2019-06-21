import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './comment.interface'
import { create } from 'domain';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel('Comment') private readonly commentModel: Model<Comment>
    ) {}
    async fetchAll() {
        return this.commentModel.find().exec()
    }
    async fetchOne(_id) {
        return this.commentModel.find({_id}).exec()
    }
    async create(data) {
        let createComment = this.commentModel({...data})
        return await createComment.save()
    }
    async update(_id, data) {
        return await this.commentModel.updateOne({_id}, {...data}).exec()
    }
    async delete(_id) {
        return await this.commentModel.deleteOne({_id}).exec()
    }
}
