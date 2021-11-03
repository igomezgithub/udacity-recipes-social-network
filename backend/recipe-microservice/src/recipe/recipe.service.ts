import { ConsoleLogger, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRecipe } from './common/interfaces/recipe.interface';
import { RECIPE } from './common/models/models';
import { RecipeDTO } from './dto/recipe.dto';

@Injectable()
export class RecipeService {
    private readonly logger = new ConsoleLogger(RecipeService.name);

    constructor(@InjectModel(RECIPE.name) private readonly model: Model<IRecipe>) { }

    async create(recipeDTO: RecipeDTO): Promise<IRecipe> {
        this.logger.debug('This is the recipe to create: ', recipeDTO);
        const newRecipe = new this.model(recipeDTO);

        this.logger.debug('A new recipe to save is: ', newRecipe);
        return await newRecipe.save();
    }

    async findAll(): Promise<IRecipe[]> {
        this.logger.debug('Find All service');
        return await this.model.find().populate('comments');
    }

    async findOne(id: string): Promise<IRecipe> {
        this.logger.debug('Find One service');
        const recipe = await (await this.model.findById(id)).populated('comments');
        return this.model.findById(id);
    }

    async update(id: string, recipeDTO: RecipeDTO): Promise<IRecipe> {
        this.logger.debug('Update service');
        return await this.model.findByIdAndUpdate(id, recipeDTO, { new: true });
    }

    async delete(id: string) {
        this.logger.debug('Delete service');
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            msg: 'Deleted'
        };
    }

    async addComments(recipeId: string, commentId: string): Promise<IRecipe> {
        this.logger.debug('Add Ccomemnts service');
        return await this.model.findByIdAndUpdate(
            recipeId, 
            { $addToSet: { comments: commentId }},
            { new: true }
        ).populate('comments');
    }
}
