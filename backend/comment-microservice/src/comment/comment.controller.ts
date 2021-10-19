import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommentMSG } from './common/constants';
import { CommentDTO } from './dto/comment.dto';
import { CommentService } from './comment.service';

@Controller()
export class CommentController {
    constructor(private readonly commentService: CommentService) { };

    @MessagePattern(CommentMSG.CREATE)
    create(@Payload() commentDto: CommentDTO) {
        return this.commentService.create(commentDto);
    }

    @MessagePattern(CommentMSG.FIND_ALL)
    findAll() {
        return this.commentService.findAll();
    }

    @MessagePattern(CommentMSG.FIND_ONE)
    findOne(@Payload() id: string) {
        return this.commentService.findOne(id);
    }

    @MessagePattern(CommentMSG.UPDATE)
    update(@Payload() payload: any) {
        return this.commentService.update(payload.id, payload.commentDto);
    }

    @MessagePattern(CommentMSG.DELETE)
    delete(@Payload() id: string) {
        return this.commentService.delete(id);
    }
}
