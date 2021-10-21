import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommentMSG, RecipeMSG } from 'src/common/constants';
import { IRecipe } from 'src/common/interfaces/recipe.interface';
import { ClientProxyRecipesSocialNetwork } from 'src/common/proxy/client-proxy';
import { RecipeDTO } from './dto/recipe.dto';

@ApiTags('recipes')
@UseGuards(JwtAuthGuard)
@Controller('api/v0/recipes')
export class RecipeController {
    constructor(private readonly clientProxy: ClientProxyRecipesSocialNetwork) { };

    private _clientProxyRecipe = this.clientProxy.clientProxyRecipes();
    private _clientProxyComment = this.clientProxy.clientProxyComments();

    @Post()
    create(@Body() recipeDto: RecipeDTO): Observable<IRecipe> {
        return this._clientProxyRecipe.send(RecipeMSG.CREATE, recipeDto);
    }

    @Get()
    findAll(): Observable<IRecipe[]> {
        return this._clientProxyRecipe.send(RecipeMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IRecipe> {
        return this._clientProxyRecipe.send(RecipeMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() recipeDto: RecipeDTO): Observable<IRecipe> {
        return this._clientProxyRecipe.send(RecipeMSG.UPDATE, { id, recipeDto });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyRecipe.send(RecipeMSG.DELETE, id);
    }

    @Post(':recipeId/comment/:commentId')
    async addComment(@Param('recipeId') recipeId: string, @Param('commentId') commentId: string) {
        const comment = await this._clientProxyComment.send(CommentMSG.FIND_ONE, commentId).toPromise();
        if (!comment) {
            throw new HttpException('Comment Not Found', HttpStatus.NOT_FOUND);
        }
        return this._clientProxyRecipe.send(RecipeMSG.ADD_COMMENT, { recipeId, commentId });
    }
}
