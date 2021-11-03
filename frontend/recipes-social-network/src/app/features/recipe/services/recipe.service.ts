import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/core/auth/api.service';
import { Ingredient } from '../models/ingredient.interface';
import { RecipeDto } from '../models/recipe-dto.interface';
import { RecipeViewModel } from '../models/recipe-view-model.interface';
import { SkillLevel } from '../models/skill-level.enum';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<RecipeViewModel[]>();

  private recipes: RecipeViewModel[] = [];

  constructor(private api: ApiService) {}

  setRecipes(recipes: RecipeViewModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  async getRecipes(): Promise<void> {
    const recipesDto: RecipeDto[] = await this.updateRecipeList();
    this.recipes = this.recipesDtoToViewModel(recipesDto);
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this.slService.addIngredients(ingredients);
  }

  addRecipeAndUpdateList(recipe: RecipeViewModel) {
    const recipeToSave: RecipeDto = this.recipeViewModelToRecipeDto(recipe);
    this.addRecipe(recipeToSave);
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeViewModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  private async addRecipe(recipe: RecipeDto): Promise<any> {
    return this.api.post('/recipes', recipe)
      .then((res) => {
        console.log('The recipe saved is: ', res)
        return res;
      })
      .catch((e) => { throw e; });
  }

  private async updateRecipeList(): Promise<RecipeDto[]> {
    return await this.api.get('/recipes')
      .then((req: any) => {
        console.log('All recipes: ', req)
        return req;
      })
      .catch((e) => { throw e; });
  }

  private recipeViewModelToRecipeDto(recipe: RecipeViewModel): RecipeDto {
    return  {
      recipeName: recipe.name,
      imagePath: recipe.imagePath,
      readyIn: recipe.readyIn,
      averageRaiting: 0,
      skillLevel: SkillLevel[recipe.skillLevel],
      description: recipe.description,
      method: recipe.method,
      ingredients: recipe.ingredients
    } as RecipeDto;
  }

  private recipeDtoToRecipeViewModel(recipe: RecipeDto): RecipeViewModel {
    return  {
      name: recipe.recipeName,
      imagePath: recipe.imagePath,
      readyIn: recipe.readyIn,
      averageRaiting: 0,
      skillLevel: SkillLevel[recipe.recipeName as keyof typeof SkillLevel],
      description: recipe.description,
      method: recipe.method,
      ingredients: recipe.ingredients
    } as RecipeViewModel;
  }

  private recipesDtoToViewModel(recipesDto: RecipeDto[]): RecipeViewModel[] {
    const recipesViewModel: RecipeViewModel[] = [];
    recipesDto.forEach((recipeDto: RecipeDto) => {
      recipesViewModel.push(this.recipeDtoToRecipeViewModel(recipeDto));
    });

    return recipesViewModel;
  }
}
