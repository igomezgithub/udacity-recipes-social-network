import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomeModule' }
  // { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },

  // { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  // { path: 'auth/signin', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
