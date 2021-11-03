import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DomainRecipeListConfiguration } from './domain-list-data-mock';
import { OperationType } from 'src/app/shared/enums/operation-type.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeViewModel } from '../../models/recipe-view-model.interface';
import { Subscription } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';

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
  recipes: RecipeViewModel[] = [];
  dataSource = DomainRecipeListConfiguration.DATASOURCE;
  columnsToDisplay = ['name', 'readyIn', 'averageRaiting', 'skillLevel', 'buttons'];
  titleColumns = [
    { title: 'Recipe Name', field: 'name' },
    { title: 'Ready In', field: 'readyIn' },
    { title: 'Average Raiting', field: 'averageRaiting' },
    { title: 'Skill Level', field: 'skillLevel' }
  ];
  verticalMenuType: OperationType = OperationType.None;
  expandedElement: RecipeViewModel | null = null;
  subscription: Subscription = new Subscription();

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
    this.verticalMenuType = OperationType.Open | OperationType.Edit | OperationType.Delete;
   }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: RecipeViewModel[]) => {
          this.recipes = recipes;
        }
      );
    this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onActionEvent(openDialogType: OperationType, itemSelected: RecipeViewModel) {
    switch (openDialogType) {
      case OperationType.Open: {
        this.router.navigate(['/recipes/detail']);
        break;
      }
      case OperationType.Edit: {
        // this.openEditDomainDialog(itemSelected);
        break;
      }
      case OperationType.Delete: {
        // this.deleteDomain(itemSelected.id);
        break;
      }
    }
  }

  onNewRecipeEvent() {
    this.router.navigate(['/recipes/new']);
  }
}
