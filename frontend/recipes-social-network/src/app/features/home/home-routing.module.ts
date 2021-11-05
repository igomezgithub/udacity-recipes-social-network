import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { AuthGuard } from '../auth/services/auth.guard';
import { SignupComponent } from '../auth/signup/signup.component';
import { RecipePageComponent } from '../recipe/pages/recipe-page.component';
import { HomePageComponent } from './pages/home-page.component';

const homeRoutes: Routes = [
  // { path: '', component: HomePageComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  //     { path: 'recipe', component: RecipePageComponent }
  //   ]
  // },
  // { path: 'auth/signin', component: LoginComponent },
  // { path: 'auth/signup', component: SignupComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
