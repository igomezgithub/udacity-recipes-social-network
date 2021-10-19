import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { COMMENT, RECIPE } from './common/models/models';
import { RecipeSchema } from './schema/recipe.schema';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { CommentSchema } from './schema/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: RECIPE.name,
        useFactory: () => RecipeSchema.plugin(require('mongoose-autopopulate'))
      },
      {
        name: COMMENT.name,
        useFactory: () => CommentSchema
      }
    ]),
  ],
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}
