import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRecipe } from './common/interfaces/recipe.interface';
import { RECIPE } from './common/models/models';
import { RecipeDTO } from './dto/recipe.dto';

@Injectable()
export class RecipeService {
    constructor(@InjectModel(RECIPE.name) private readonly model: Model<IRecipe>) { }

    async create(recipeDTO: RecipeDTO): Promise<IRecipe> {
        const newRecipe = new this.model(recipeDTO);
        return await newRecipe.save();
    }

    async findAll(): Promise<IRecipe[]> {
        return await this.model.find().populate('comments');
    }

    assign ({title, method, ingredients, url, comments }: IRecipe): IRecipe {
        return Object.assign({
            title, method, ingredients, url, comments
        });
    }

    async findOne(id: string): Promise<IRecipe> {
        const recipe = await (await this.model.findById(id)).populated('comments');
        return await this.assign(recipe);
    }

    async update(id: string, recipeDTO: RecipeDTO): Promise<IRecipe> {
        return await this.model.findByIdAndUpdate(id, recipeDTO, { new: true });
    }

    async delete(id: string) {
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            msg: 'Deleted'
        };
    }

    async addComments(recipeId: string, commentId: string): Promise<IRecipe> {
        return await this.model.findByIdAndUpdate(
            recipeId, 
            { $addToSet: { comments: commentId }},
            { new: true }
        ).populate('comments');
    }
}
