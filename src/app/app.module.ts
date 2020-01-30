import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsModule } from './components/films/films.module';
import { FilmsRoutingModule } from './components/films/films-routing.module';
import { HomeModule } from './components/home/home.module';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { StarshipsModule } from './components/starships/starships.module';
import { StarshipsRoutingModule } from './components/starships/starships-routing.module';
import { NotFoundComponent } from './components/not-found/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FilmsModule,
    HomeModule,
    FilmsRoutingModule,
    HomeRoutingModule,
    StarshipsModule,
    StarshipsRoutingModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
