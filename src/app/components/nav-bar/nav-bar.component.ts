import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  buscar(texto : string){
    texto = texto.trim()
    if (texto.length === 0){
      this.router.navigateByUrl('home')      
      return
    }
    this.router.navigateByUrl(`buscar/${texto}`)
  }
}
