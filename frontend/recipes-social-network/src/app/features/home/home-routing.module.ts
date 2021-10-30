import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { RecipeItemComponent } from '../recipe/components/recipe-list/recipe-item/recipe-item.component';
import { RecipePageComponent } from '../recipe/pages/recipe-page.component';
import { HomePageComponent } from './pages/home-page.component';

// const homeRoutes: Routes = [
//   { path: '', component: HomeComponent,
//     children: [
//       {path: 'recipes',loadChildren: () => import('../../features/recipe/recipe.module').then(m => m.RecipeModule) }
//   ]}


  const homeRoutes: Routes = [
    { path: '', component: HomePageComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '', redirectTo: '/recipes', pathMatch: 'full' },
        { path: 'recipes', component: RecipePageComponent }
      ]
    }

    // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    // { path: 'recipes', component: RecipePageComponent }




    // { path: 'home', component: HomePageComponent,
    //   children: [
    //     // { path: 'recipes', loadChildren: () => import('../../features/recipe/recipe.module').then(m => m.RecipeModule) }
    //     { path: 'recipes', component: RecipePageComponent }
    //     //{ path: 'signup', component: SignupComponent }
    //   ]
    // }


    //{ path: 'comment', component: CommentComponent }
    //{ path: '**', component: HomeComponent }
  ];

  // { path: '', component: HomeComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: '', component: SignupComponent },
  //     { path: 'signup', component: SignupComponent }
  //   ]

  // },
  // { path: '**', redirectTo: 'recipes' }
//];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
