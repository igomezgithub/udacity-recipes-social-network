import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../ui-modules/material/material.module';
import { DefaultListMenuComponent } from './components/default-list-menu/default-list-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule
  ],
  declarations: [ DefaultListMenuComponent ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
    DefaultListMenuComponent
  ],
  providers: [ ],
  entryComponents: [ ]
})

export class SharedModule {
}
