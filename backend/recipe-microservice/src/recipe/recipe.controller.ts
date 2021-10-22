import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RecipeMSG } from './common/constants';
import { RecipeDTO } from './dto/recipe.dto';
import { RecipeService } from './recipe.service';

@Controller()
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) { };

    @MessagePattern(RecipeMSG.CREATE)
    create(@Payload() recipeDTO: RecipeDTO) {
        return this.recipeService.create(recipeDTO);
    }

    @MessagePattern(RecipeMSG.FIND_ALL)
    findAll() {
        return this.recipeService.findAll();
    }

    @MessagePattern(RecipeMSG.FIND_ONE)
    findOne(@Payload() id: string) {
        return this.recipeService.findOne(id);
    }

    @MessagePattern(RecipeMSG.UPDATE)
    update(@Payload() payload: any) {
        return this.recipeService.update(payload.id, payload.recipeDto);
    }

    @MessagePattern(RecipeMSG.DELETE)
    delete(@Payload() id: string) {
        return this.recipeService.delete(id);
    }

    @MessagePattern(RecipeMSG.ADD_COMMENT)
    addComments(@Payload() payload: any) {
        return this.recipeService.addComments(payload.recipeId, payload.commentId);
    }
}
