import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Personajes } from '../models/results.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private personajesFavSubject =  new BehaviorSubject<Personajes[]>([]);
  personajesFav$ = this.personajesFavSubject.asObservable();
  constructor() {
    this.inicializarStorage ();
   }


  inicializarStorage(){
    const storageActual = JSON.parse(localStorage.getItem('favoritos')!);    
    if (!storageActual) {
      localStorage.setItem('favoritos',JSON.stringify([]))
    }
  }

  obtenerFavoritos(){
    const personajesFav = JSON.parse(localStorage.getItem('favoritos')!)
    this.personajesFavSubject.next(personajesFav);
    return personajesFav
  }

  agregarORemover(personaje : Personajes){
    const {id} = personaje;
    const favoritosActuales = this.obtenerFavoritos();
    const buscar = !!favoritosActuales.find((fav:Personajes)=>fav.id === id)

    buscar? this.eliminarFavorito(id) : this.agregarFavorito(personaje); 
  }

  agregarFavorito(personaje : Personajes){
    const favoritosActuales = this.obtenerFavoritos();
    localStorage.setItem('favoritos', JSON.stringify([...favoritosActuales, personaje]))
    this.personajesFavSubject.next([...favoritosActuales, personaje])
  }
  eliminarFavorito(id:number){
    const favoritosActuales = this.obtenerFavoritos();
    const personajes = favoritosActuales.filter((item:Personajes) => item.id != id)
    localStorage.setItem('favoritos', JSON.stringify([...personajes]))
    this.personajesFavSubject.next([...personajes])
  }
}
