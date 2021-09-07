import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickServiceService } from '../../services/rick-service.service';
import { Personajes } from '../../models/results.model';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  personajes : Personajes[] =[]
  page : number = 1;
  totalPages : number = 1;
  cargando = true;
  err = false;
  texto : string = '';
  constructor(private activatedRoute: ActivatedRoute,
              private rickService : RickServiceService ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.texto = data.id
      this.page = 1
      this.buscar(this.page);
    })
    
  }

  cambiarPagina(page : number){
    this.page = page;
    this.buscar(page)
  }

  paginaAnterior(page : number){
    if (page > 1) {
      this.page = page-1
    }
  }

  paginasiguiente(page: number){
    if (page != this.totalPages) {
      this.page = page+1
    }
  }

  buscar(page : number){
    this.rickService.buscarPersonaje(page, this.texto).subscribe(data=>{
      this.totalPages = data.info.pages;
      this.personajes = this.rickService.obtenerEpisodio(data.results)
      this.cargando = false
    },err=>{
      this.cargando = true
      this.err = true
      this.personajes = []
    })
  }

}
