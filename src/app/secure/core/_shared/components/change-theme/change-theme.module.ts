import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeThemeComponent } from './change-theme.component';
import { MaterialModule } from '../../../../../_shared/components/material/material.module';



@NgModule({
  declarations: [ChangeThemeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ChangeThemeModule { }
