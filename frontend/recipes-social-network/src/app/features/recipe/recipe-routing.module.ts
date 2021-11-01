import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipePageComponent } from './pages/recipe-page.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { AuthGuard } from '../auth/services/auth.guard';

const recipeRoutes: Routes = [
   { path: '', component: RecipePageComponent,
     canActivate: [AuthGuard],
     children: [
      { path: '', redirectTo: '/recipes', pathMatch: 'full' },
      { path: '', component: RecipeListComponent,
  //       children: [
  //         { path: 'list', component: RecipeListComponent },
  //         { path: 'new', component: RecipeItemComponent },
  //         {
  //           path: ':id',
  //           component: RecipeDetailComponent
  //           //resolve: [RecipesResolverService]
  //         },
  //         {
  //           path: ':id/edit',
  //           component: RecipeItemComponent
  //           //resolve: [RecipesResolverService]
  //         }
  //       ]
       }
     ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class RecipeRoutingModule {
}
