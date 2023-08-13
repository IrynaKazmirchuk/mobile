import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { NewsComponent } from './components/news/news.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StatusComponent } from './components/status/status.component';
import { ProgressComponent } from './components/progress/progress.component';
import { PersonDataComponent } from './components/person-data/person-data.component';
import { PersonSidesComponent } from './components/person-sides/person-sides.component';
import { PersonReportsComponent } from './components/person-reports/person-reports.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    NavbarComponent,
    NotFoundComponent,
    NewsComponent,
    TasksComponent,
    StatusComponent,
    ProgressComponent,
    PersonDataComponent,
    PersonSidesComponent,
    PersonReportsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
