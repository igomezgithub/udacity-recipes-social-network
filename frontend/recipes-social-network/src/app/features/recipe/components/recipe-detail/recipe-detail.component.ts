import { Component, OnInit } from '@angular/core';
import { RecipeItem } from '../../models/recipe-item.interface';
import { SkillLevel } from '../../models/skill-level.enum';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeItem = {
    recipeName: '',
    readyIn: 0,
    averageRaiting: 0,
    skillLevel: SkillLevel.Easy,
    description: '',
    imagePath: '',
    ingredients: [] };
    id: number = 0;

  constructor() { }

  ngOnInit(): void {
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     this.recipe = this.recipeService.getRecipe(this.id);
    //   }
    // );
  }

  onAddToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    // this.router.navigate(['/recipes']);
  }

}
