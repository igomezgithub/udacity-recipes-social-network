import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommentMSG, RecipeMSG } from 'src/common/constants';
import { IComment } from 'src/common/interfaces/comment.interface';
import { ClientProxyRecipesSocialNetwork } from 'src/common/proxy/client-proxy';
import { CommentDTO } from './dto/comment.dto';

@ApiTags('comments')
@UseGuards(JwtAuthGuard)
@Controller('api/v0/comments')
export class CommentController {
    constructor(private readonly clientProxy: ClientProxyRecipesSocialNetwork) { };

    private _clientProxyComment = this.clientProxy.clientProxyComments();

    @Post()
    create(@Body() commentDto: CommentDTO): Observable<IComment> {
        return this._clientProxyComment.send(CommentMSG.CREATE, commentDto);
    }

    @Get()
    findAll(): Observable<IComment[]> {
        return this._clientProxyComment.send(CommentMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IComment> {
        return this._clientProxyComment.send(CommentMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() commentDto: CommentDTO): Observable<IComment> {
        return this._clientProxyComment.send(CommentMSG.UPDATE, { id, commentDto });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyComment.send(CommentMSG.DELETE, id);
    }
}
