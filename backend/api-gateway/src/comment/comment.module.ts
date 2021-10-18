import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy-module';
import { CommentController } from './comment.controller';

@Module({
  imports: [ProxyModule],
  controllers: [CommentController]
})
export class CommentModule {}
