import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { CommentMSG, RecipeMSG } from 'src/common/constants';
import { IComment } from 'src/common/interfaces/comment.interface';
import { ClientProxyRecipesSocialNetwork } from 'src/common/proxy/client-proxy';
import { CommentDTO } from './dto/comment.dto';

@ApiTags('comments')
@Controller('api/v0/comment')
export class CommentController {
    constructor(private readonly clientProxy: ClientProxyRecipesSocialNetwork) { };

    private _clientProxyComment = this.clientProxy.clientProxyUsers();

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

    @Delete()
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyComment.send(CommentMSG.DELETE, id);
    }
}
