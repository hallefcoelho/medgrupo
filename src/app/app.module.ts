import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PartialInterface } from './_shared/interface/partial.interface';
import { PartialService } from './_shared/http-services/partial.service';
import { ContentInterface } from './_shared/interface/content.interface';
import { ContentService } from './_shared/http-services/content.service';
import { ScheduleService } from './_shared/http-services/schedule.service';
import { ScheduleInterface } from './_shared/interface/schedule.interface';
import { ToDoListModule } from './secure/core/to-do-list/to-do-list.module';
import { UserInterface } from './_shared/interface/user.interface';
import { UserService } from './_shared/http-services/user.service';
import { TitleModule } from './_shared/components/title/title.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ToDoListModule,
    TitleModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: ContentInterface, useClass: ContentService },
    { provide: PartialInterface, useClass: PartialService },
    { provide: ScheduleInterface, useClass: ScheduleService },
    { provide: UserInterface, useClass: UserService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
