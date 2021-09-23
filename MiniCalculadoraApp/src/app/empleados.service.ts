import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) { }

  empleado = new Empleado("","","",0);

  empleados: Empleado[] = [
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fdez", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administrativo", 2500)
  ];

  AniadirEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: "+ empleado.nombre + "\n"+
    "Con un salario de: " + empleado.salario);
    this.empleados.push(empleado);
  }
}
