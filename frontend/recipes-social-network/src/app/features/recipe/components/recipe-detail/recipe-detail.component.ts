import { Component, OnInit } from '@angular/core';
import { RecipeEditViewModel } from '../../models/recipe-edit-view-model.interface';
import { SkillLevel } from '../../models/skill-level.enum';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number = 0;
  recipe: RecipeEditViewModel = {
    id: '',
    name: '',
    imagePath: '',
    readyIn: 0,
    averageRaiting: 0,
    skillLevel: SkillLevel.Easy,
    description: '',
    method: '',
    ingredients: ''
  };

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

  onEditRecipe() {
    // this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    // this.router.navigate(['/recipes']);
  }

}
