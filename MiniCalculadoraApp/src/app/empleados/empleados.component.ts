import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  titulo = 'Listado de Empleados';
  nombre = "";
  apellido = "";
  cargo = "";
  salario = 0;
  empleado = new Empleado("","","",0);

 /* empleados: Empleado[] = [
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fdez", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administrativo", 2500)
  ];*/

  empleados: Empleado[] = [];

  constructor(private empleadosService: ServicioEmpleadosService, private servicioEmpleados: EmpleadosService) { }

  ngOnInit(): void {
    this.empleados = this.servicioEmpleados.empleados;
  }

  AniadirEmpleado(nom:string,apell:string, car:string, salar:number){
    this.empleado = new Empleado(nom,apell,car,salar);
    //this.empleadosService.muestraMensaje("Nombre del empleado: "+ this.empleado.nombre);
    this.servicioEmpleados.AniadirEmpleadoServicio(this.empleado);
    //this.empleados.push(this.empleado);
    //console.log(this.empleados);
  }

}
