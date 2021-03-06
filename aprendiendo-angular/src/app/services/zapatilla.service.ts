import { Injectable } from '@angular/core';
import {Zapatilla} from '../models/zapatilla'

@Injectable({
  providedIn: 'root'
})
export class ZapatillaService {
  public zapatillas : Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Nike Airmax','Nike','Rojo',190,true),
      new Zapatilla('Reebook Classic','Reebook','Blanco',80,true),
      new Zapatilla('Nike Runner MD','Nike','Negro',60,true),
      new Zapatilla('Adidas Yezzy','Adidas','Gris',180,false)
    ];
  }

  getTexto(){
    return "Hola mundo desde un servicio";
  }

  getZapatillas() : Array<Zapatilla>{
    return this.zapatillas;
  }
}
