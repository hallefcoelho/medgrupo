import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../../_shared/components/material/material.module';
import { HomeComponent } from './home.component';
import { CardContentComponent } from './_shared/card-content/card-content.component';
import { CardPartialComponent } from './_shared/card-partial/card-partial.component';
import { ToDoListModule } from '../core/to-do-list/to-do-list.module';
import { TitleModule } from '../../_shared/components/title/title.module';


@NgModule({
  declarations: [
    HomeComponent,
    CardContentComponent,
    CardPartialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ToDoListModule,
    TitleModule
  ]
})
export class HomeModule { }
