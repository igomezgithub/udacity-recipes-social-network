import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IComment } from './common/interfaces/comment.interface';
import { COMMENT } from './common/models/models';
import { CommentDTO } from './dto/comment.dto';

@Injectable()
export class CommentService {
    constructor(@InjectModel(COMMENT.name) private readonly model: Model<IComment>) { }

    async create(commentDTO: CommentDTO): Promise<IComment> {
        const newComment = new this.model(commentDTO);
        return await newComment.save();
    }

    async findAll(): Promise<IComment[]> {
        return await this.model.find();
    }

    async findOne(id: string): Promise<IComment> {
        return await this.model.findById(id);
    }

    async update(id: string, commentDTO: CommentDTO): Promise<IComment> {
        return await this.model.findByIdAndUpdate(id, commentDTO, { new: true });
    }

    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            msg: 'Deleted'
        };
    }
}
