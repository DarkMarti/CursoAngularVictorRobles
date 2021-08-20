import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  titulo:string;
  public zapatillas : Array<Zapatilla> = [];
  public marcas: Array<string>;
  public color:string;
  public mi_marca:string;

  constructor( private _zapatillaService:ZapatillaService) {
    this.mi_marca = "Fila";
    this.color = "red";
    this.titulo = "Componente de Zapatillas";
    this.marcas = new Array();

  }

  ngOnInit(): void {
    this.zapatillas = this._zapatillaService.getZapatillas();
    //alert(this._zapatillaService.getTexto());

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
