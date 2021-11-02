import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-list/recipe-item/recipe-item.component';
import { RecipePageComponent } from './pages/recipe-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    RecipePageComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RecipePageComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
