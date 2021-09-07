import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// HTTP
import { HttpClientModule } from "@angular/common/http";
//Paricles
import { NgParticlesModule } from 'ng-particles';
//Componenrtes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CardsComponent,
    FavoritosComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    HttpClientModule,
    LazyLoadImageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
