import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../../models/results.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  @Input() personajes : Personajes[] = []
  defaultImage = 'assets/loading2.gif';
  favorito = false
  constructor(private storage : StorageService) { }

  ngOnInit(): void {
    
  }

  guardarFav(personaje: Personajes){
    personaje.favorito = !personaje.favorito
    this.storage.agregarORemover(personaje);
  }

}
