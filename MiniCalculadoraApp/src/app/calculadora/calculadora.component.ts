import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  title = 'Mini Calculadora';

  numero1:number = 0;
  numero2:number = 0;
  resultado: number = 0;

  sumar(): number{
    this.resultado = this.numero1 + this.numero2;
    return this.resultado;
  }

  restar(): number{
    this.resultado = this.numero1 - this.numero2;
    return this.resultado;
  }

  multiplicar(): number{
    this.resultado = this.numero1 * this.numero2;
    return this.resultado;
  }

  dividir(): number{
    this.resultado = this.numero1 / this.numero2;
    return this.resultado;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
