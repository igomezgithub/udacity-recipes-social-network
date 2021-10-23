import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home', loadChildren: './home/home.module#HomeModule' }
  {path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
