import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Rick, Personajes } from '../models/results.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RickServiceService {

  private baseUrl = "https://rickandmortyapi.com/api"
  constructor(private http: HttpClient, 
              private storage:StorageService) {}
  
  
  obtenerPersonajes(page: number){
    return this.http.get<Rick>(`${this.baseUrl}/character?page=${page}`)
  }

  obtenerEpisodio(personajes : Personajes[]){
    for(const personaje of personajes){
      this.http.get(personaje.episode[0]).subscribe((data:any)=>{
        personaje.episode[0] = data.name
      })
    }

    const favoritosActuales = this.storage.obtenerFavoritos();
    const nuevaData = personajes.map(personaje =>{
      const buscar = !!favoritosActuales.find((fav:Personajes) => fav.id === personaje.id)
      return {...personaje, favorito: buscar, siEpisode: true}
    })
      
    return nuevaData
  }

  buscarPersonaje(page:number, name : string){
    return this.http.get<Rick>(`${this.baseUrl}/character?page=${page}&name=${name}`)
  }
}
