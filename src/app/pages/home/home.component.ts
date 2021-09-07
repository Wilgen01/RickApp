import { Component, OnInit } from '@angular/core';
import { RickServiceService } from '../../services/rick-service.service';
import { Personajes } from '../../models/results.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personajes : Personajes[] =[]
  page : number = 1;
  totalPages : number = 1;
  cargando = true;
  err = false;

  constructor(private rickService: RickServiceService) { 

  }

  ngOnInit(): void {    
    this.obtenerPersonajes(this.page);
  }


  obtenerPersonajes(page : number){
    this.rickService.obtenerPersonajes(page).subscribe(data=>{
      this.totalPages = data.info.pages
      this.personajes = this.rickService.obtenerEpisodio(data.results)
      this.cargando = false
    }, err=>{
      this.err = true
    })
  }

  cambiarPagina(page : number){
    if (page >= 31) {
      this.obtenerPersonajes(page);
      this.page = 31
    }else{
      this.page = page
      this.obtenerPersonajes(page);
    }
  }

  paginaAnterior(page : number){
    if (page > 3) {
      this.page = page-3
    }
  }

  paginasiguiente(page: number){
    if (page+3 <= this.totalPages-3) {
      this.page = page+3
    }else{
      this.page= this.totalPages-3
    }
  }



  

}
