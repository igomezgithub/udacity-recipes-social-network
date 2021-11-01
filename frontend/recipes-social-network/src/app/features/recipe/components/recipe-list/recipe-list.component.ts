import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { RecipeList } from '../../models/recipe-list.interface';
import { DomainRecipeListConfiguration } from './domain-list-data-mock';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RecipeListComponent implements OnInit {
  dataSource = DomainRecipeListConfiguration.DATASOURCE;
  columnsToDisplay = ['recipeName', 'readyIn', 'averageRaiting', 'skillLevel'];
  titleColumns = [
    { title: 'Recipe Name', field: 'recipeName' },
    { title: 'Ready In', field: 'readyIn' },
    { title: 'Average Raiting', field: 'averageRaiting' },
    { title: 'Skill Level', field: 'skillLevel' }
  ];
  expandedElement: RecipeList | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
