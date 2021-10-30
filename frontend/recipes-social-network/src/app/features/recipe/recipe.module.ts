import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-list/recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipePageComponent } from './pages/recipe-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RecipePageComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecipeRoutingModule
  ],
  exports: [
    RecipePageComponent,
    RecipeItemComponent
  ]
})
export class RecipeModule { }
