import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RecipeItem } from '../../models/recipe-item.interface';
import { DomainRecipeListConfiguration } from './domain-list-data-mock';
import { OperationType } from 'src/app/shared/enums/operation-type.enum';
import { ActivatedRoute, Router } from '@angular/router';

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
export class RecipeListComponent implements OnInit {
  dataSource = DomainRecipeListConfiguration.DATASOURCE;
  columnsToDisplay = ['recipeName', 'readyIn', 'averageRaiting', 'skillLevel', 'buttons'];
  titleColumns = [
    { title: 'Recipe Name', field: 'recipeName' },
    { title: 'Ready In', field: 'readyIn' },
    { title: 'Average Raiting', field: 'averageRaiting' },
    { title: 'Skill Level', field: 'skillLevel' }
  ];
  verticalMenuType: OperationType = OperationType.None;
  expandedElement: RecipeItem | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.verticalMenuType = OperationType.Open | OperationType.Edit | OperationType.Delete;
   }

  ngOnInit(): void {
  }

  onActionEvent(openDialogType: OperationType, itemSelected: RecipeItem) {
    switch (openDialogType) {
      case OperationType.Open: {
        this.router.navigate(['/recipe/detail']);
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
}
