import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page.component';
import { RecipeModule } from '../recipe/recipe.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RecipeModule,
    SharedModule,
    // HomeRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
