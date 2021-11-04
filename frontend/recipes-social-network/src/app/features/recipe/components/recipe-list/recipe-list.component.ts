import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DomainRecipeListConfiguration } from './domain-list-data-mock';
import { OperationType } from 'src/app/shared/enums/operation-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import { RecipeListViewModel } from '../../models/recipe-lilst-view-model.interface';
import { RecipeDto } from '../../models/recipe-dto.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: RecipeListViewModel[] = [];
  dataSource = DomainRecipeListConfiguration.DATASOURCE;
  columnsToDisplay = ['name', 'readyIn', 'averageRaiting', 'skillLevel', 'buttons'];
  titleColumns = [
    { title: 'Recipe Name', field: 'name' },
    { title: 'Ready In', field: 'readyIn' },
    { title: 'Average Raiting', field: 'averageRaiting' },
    { title: 'Skill Level', field: 'skillLevel' }
  ];
  verticalMenuType: OperationType = OperationType.None;
  expandedElement: RecipeListViewModel | null = null;
  subscription: Subscription = new Subscription();

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
    this.verticalMenuType = OperationType.Open | OperationType.Edit | OperationType.Delete;
   }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: RecipeDto[]) => {
          this.recipes = this.recipesListDtoToViewModel(recipes);
        }
      );
    this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onActionEvent(openDialogType: OperationType, itemSelected: RecipeListViewModel) {
    switch (openDialogType) {
      case OperationType.Open: {
        this.router.navigate(['/recipes/detail']);
        break;
      }
      case OperationType.Edit: {
        this.router.navigate(['/recipes/edit', itemSelected.id]);
        break;
      }
      case OperationType.Delete: {
        this.recipeService.deleteRecipe(itemSelected.id);
        break;
      }
    }
  }

  onNewRecipeEvent() {
    this.router.navigate(['/recipes/edit', '']);
  }

  private recipeDtoToRecipeListViewModel(recipe: RecipeDto): RecipeListViewModel {
    return  {
      id: recipe._id,
      name: recipe.recipeName,
      imagePath: recipe.url,
      readyIn: recipe.readyIn,
      averageRaiting: 0,
      skillLevel: recipe.skillLevel,
      description: recipe.description,
      method: recipe.method,
      ingredients: recipe.ingredients
    } as RecipeListViewModel;
  }

  private recipesListDtoToViewModel(recipesDto: RecipeDto[]): RecipeListViewModel[] {
    const recipesViewModel: RecipeListViewModel[] = [];
    recipesDto.forEach((recipeDto: RecipeDto) => {
      recipesViewModel.push(this.recipeDtoToRecipeListViewModel(recipeDto));
    });

    return recipesViewModel;
  }
}
