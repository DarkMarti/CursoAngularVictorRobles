import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private servicioEmpleados: ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregaCaracteristicas(value:string){
    this.servicioEmpleados.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }
}
