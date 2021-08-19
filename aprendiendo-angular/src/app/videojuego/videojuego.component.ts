import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

  titulo:string;
  listado:string;

  constructor() {
    this.titulo = "Componente de videojuegos";
    this.listado = "Listado de los videojuegos más populares";
  }

  ngOnInit(): void {
   // console.log("OnInit ejecutado");
  }

  ngDoCheck(): void {
   // console.log("DoCheck ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Titulo cambiado";
  }

  ngOnDestroy(): void {
   // console.log("onDestroy ejecutado!")
  }

}
