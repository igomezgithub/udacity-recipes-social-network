import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/services/auth.guard';
import { SignupComponent } from './features/auth/signup/signup.component';
import { HomePageComponent } from './features/home/pages/home-page.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomeModule' }
  // { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },

  // { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
