import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  titulo:string;

  constructor() { 
    this.titulo = "Componente de Zapatillas";
  }

  ngOnInit(): void {
  }

}
