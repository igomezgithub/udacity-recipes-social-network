import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AuthGuard } from './features/auth/services/auth.guard';
import { SignupComponent } from './features/auth/signup/signup.component';
import { HomePageComponent } from './features/home/pages/home-page.component';
import { RecipeDetailComponent } from './features/recipe/components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './features/recipe/components/recipe-edit/recipe-edit.component';
import { RecipePageComponent } from './features/recipe/pages/recipe-page.component';

// const appRoutes: Routes = [
//   { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
//   { path: '**', redirectTo: '' }
// ];


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    canActivate: [AuthGuard],
    component: HomePageComponent,
    children: [
      { path: '', component: RecipePageComponent },
      { path: 'detail', component: RecipeDetailComponent },
      { path: 'edit/:id', component: RecipeEditComponent },
      // {
      //   path: ':id',
      //   component: RecipeDetailComponent,
      //   resolve: [RecipesResolverService]
      // },
      // {
      //   path: ':id/edit',
      //   component: RecipeEditComponent,
      //   resolve: [RecipesResolverService]
      // }
    ]
  },
  { path: 'auth/signin', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
