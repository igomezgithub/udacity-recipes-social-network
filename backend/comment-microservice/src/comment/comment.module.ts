import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { COMMENT } from './common/models/models';
import { CommentSchema } from './schema/comment.schema';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: COMMENT.name,
        useFactory: () => CommentSchema
      }
    ]),
  ],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
