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

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
  //   )
  // ];
  private recipes: RecipeViewModel[] = [];

  constructor(private api: ApiService) {}

  setRecipes(recipes: RecipeViewModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //this.slService.addIngredients(ingredients);
  }

  addRecipeAndUpdateList(recipe: RecipeViewModel) {
    const recipeToSave: RecipeDto = {
      recipeName: recipe.name,
      imagePath: recipe.imagePath,
      readyIn: recipe.readyIn,
      averageRaiting: 0,
      skillLevel: SkillLevel[recipe.skillLevel],
      description: recipe.description,
      method: recipe.method,
      ingredients: recipe.ingredients
    };
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
}
