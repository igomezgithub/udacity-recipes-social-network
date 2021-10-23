import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      {path: '', component: SignupComponent },
      {path: 'signup', component: SignupComponent },
      {path: 'login', component: LoginComponent }
  ]}
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
