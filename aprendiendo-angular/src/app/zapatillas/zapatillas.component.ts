import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  titulo:string;
  public zapatillas : Array<Zapatilla>;
  public marcas: Array<string>;
  public color:string;
  public mi_marca:string;

  constructor() {
    this.mi_marca = "Fila";
    this.color = "red";
    this.titulo = "Componente de Zapatillas";
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Nike Airmax','Nike','Rojo',190,true),
      new Zapatilla('Reebook Classic','Reebook','Blanco',80,true),
      new Zapatilla('Nike Runner MD','Nike','Negro',60,true),
      new Zapatilla('Adidas Yezzy','Adidas','Gris',180,false)
    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
    this.zapatillas.forEach(element => {
      this.marcas.push(element.marca);
      console.log("marcas" + this.marcas);
    });
  }

  mostrarMarca(){
    alert(this.mi_marca);
  }

  addMarca(){
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(indice:any){
    delete this.marcas[indice];
    //this.marcas.splice(indice, 1);
  }
}
