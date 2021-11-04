import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, FormGroupDirective, NgForm } from '@angular/forms';

import { RecipeService } from '../../services/recipe.service';
import { SkillLevel } from '../../models/skill-level.enum';
import { RecipeEditViewModel } from '../../models/recipe-edit-view-model.interface';
import { RecipeDto } from '../../models/recipe-dto.interface';

const ALL_SKILL_LEVELS: any[] = [
  { key: SkillLevel.None, value: '' },
  { key: SkillLevel.Beginner, value: 'Beginner' },
  { key: SkillLevel.Easy, value: 'Easy' },
  { key: SkillLevel.Intermediate, value: 'Intermediate' },
  { key: SkillLevel.Experienced, value: 'Experienced' }
];

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: string = '';
  editMode = false;
  recipeItemForm: FormGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] !== '';
      this.initForm();
    });
  }

  get skillLevels(): any[] {
    return ALL_SKILL_LEVELS;
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeItemForm.value);
    } else {
      const newRecipe: RecipeDto = this.recipeViewModelToRecipeDto(this.recipeItemForm.value);
      this.recipeService.addRecipeAndUpdateList(newRecipe);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  private initForm() {
    let id = '';
    let recipeName = '';
    let recipeImagePath: string | undefined = undefined;
    let readyIn: number | undefined = undefined;
    let skillLevel: SkillLevel | undefined = undefined;
    let recipeDescription = '';
    let recipeIngredients: string | undefined = undefined;
    let ingredientName: string = '';
    let ingredientAmount: string = '';
    let method: string | undefined = undefined;

    if (this.editMode) {
      const recipeSelected: RecipeEditViewModel = this.recipeDtoToRecipeListViewModel(this.recipeService.getRecipe(this.id));
      id = recipeSelected.id
      recipeName = recipeSelected.name;
      recipeImagePath = recipeSelected.imagePath;
      readyIn = recipeSelected.readyIn;
      skillLevel = recipeSelected.skillLevel;
      recipeDescription = recipeSelected.description;
      recipeIngredients = recipeSelected.ingredients;
      method = recipeSelected.method;
    }

    this.recipeItemForm = new FormGroup({
      id: new FormControl(id),
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath),
      readyIn: new FormControl(readyIn),
      skillLevel: new FormControl(skillLevel),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: new FormControl(recipeIngredients),
      ingredientName: new FormControl(ingredientName),
      ingredientAmount: new FormControl(ingredientAmount),
      method: new FormControl(method)
    });
   }

  geRecipeNameErrorMessage() {
    if (this.recipeItemForm.controls.name.hasError('required')) {
      return 'You must enter the recipe name';
    } else {
      return null;
    }
  }

  onActivateIngredientButton(): boolean {
    return !(this.recipeItemForm.get('ingredientName')?.value !== '' && this.recipeItemForm.get('ingredientAmount')?.value !== '');
  }

  onSaveIngredientAction() {
    const previousValue: string = (this.recipeItemForm.get('ingredients')?.value === '') ? "" : this.recipeItemForm.get('ingredients')?.value;
    const nextValue =
      previousValue +
      this.recipeItemForm.get('ingredientAmount')?.value +
      " - " +
      this.recipeItemForm.get('ingredientName')?.value +
      "\n";

    this.recipeItemForm.get('ingredients')?.setValue(nextValue);
  }

  private recipeViewModelToRecipeDto(recipe: RecipeEditViewModel): RecipeDto {
    return  {
      _id: recipe.id,
      recipeName: recipe.name,
      url: recipe.imagePath,
      readyIn: recipe.readyIn,
      averageRaiting: 0,
      skillLevel: SkillLevel[recipe.skillLevel],
      description: recipe.description,
      method: recipe.method,
      ingredients: recipe.ingredients
    } as RecipeDto;
  }

  private recipeDtoToRecipeListViewModel(recipe: RecipeDto): RecipeEditViewModel {
    return  {
      id: recipe._id,
      name: recipe.recipeName,
      imagePath: recipe.url,
      readyIn: recipe.readyIn,
      averageRaiting: 0,
      skillLevel: recipe.skillLevel as SkillLevel,
      description: recipe.description,
      method: recipe.method,
      ingredients: recipe.ingredients
    } as RecipeEditViewModel;
  }
}
