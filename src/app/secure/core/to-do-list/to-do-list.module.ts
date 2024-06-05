import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list.component';
import { MaterialModule } from '../../../_shared/components/material/material.module';
import { FormsModule } from '@angular/forms';
import { TitleModule } from '../../../_shared/components/title/title.module';



@NgModule({
  declarations: [ToDoListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TitleModule
  ],
  exports: [ToDoListComponent]
})
export class ToDoListModule { }
