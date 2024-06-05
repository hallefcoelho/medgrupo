import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SidebarModule } from './core/sidebar/sidebar.module';
import { SecureComponent } from './secure.component';
import { MaterialModule } from '../_shared/components/material/material.module';
import { HeaderMobileComponent } from './core/header-mobile/header-mobile.component';
import { FooterMobileComponent } from './core/footer-mobile/footer-mobile.component';
import { ToDoListModule } from './core/to-do-list/to-do-list.module';
import { ChangeThemeModule } from './core/_shared/components/change-theme/change-theme.module';
import { ContentsComponent } from './content/contents.component';
import { TitleModule } from '../_shared/components/title/title.module';
import { MentoringComponent } from './mentoring/mentoring.component';
import { TrainingComponent } from './training/training.component';
import { MetricsComponent } from './metrics/metrics.component';


@NgModule({
  declarations: [
    SecureComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
    ContentsComponent,
    MentoringComponent,
    TrainingComponent,
    MetricsComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    SidebarModule,
    MaterialModule,
    ToDoListModule,
    ChangeThemeModule,
    TitleModule
  ]
})
export class SecureModule { }
