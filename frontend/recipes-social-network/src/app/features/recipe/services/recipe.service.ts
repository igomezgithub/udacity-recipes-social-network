import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/core/auth/api.service';
import { Ingredient } from '../models/ingredient.interface';
import { RecipeDto } from '../models/recipe-dto.interface';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<RecipeDto[]>();

  private recipes: RecipeDto[] = [];

  constructor(private api: ApiService) {}

  setRecipes(recipes: RecipeDto[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  async getRecipes(): Promise<void> {
    this.recipes = await this.updateRecipeList();
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this.slService.addIngredients(ingredients);
  }

  addRecipeAndUpdateList(recipe: RecipeDto) {
    // const recipeToSave: RecipeDto = this.recipeViewModelToRecipeDto(recipe);
    this.addRecipe(recipe);
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeDto) {
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
}