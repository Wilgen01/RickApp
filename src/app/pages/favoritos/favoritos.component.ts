import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Personajes } from '../../models/results.model';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  personajes : Personajes[] = []
  constructor(private storage : StorageService) { }

  ngOnInit(): void {
    this.personajes = this.storage.obtenerFavoritos();
    this.personajes.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  }
  



}
