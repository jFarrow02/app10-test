import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsModule } from './components/films/films.module';
import { FilmsRoutingModule } from './components/films/films-routing.module';
import { HomeModule } from './components/home/home.module';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { StarshipsModule } from './components/starships/starships.module';
import { StarshipsRoutingModule } from './components/starships/starships-routing.module';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
