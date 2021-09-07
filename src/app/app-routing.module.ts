import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'buscar/:id', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
