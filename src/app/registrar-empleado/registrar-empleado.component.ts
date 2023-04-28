// Este código define el componente RegistrarEmpleadoComponent en Angular.

import { Component, OnInit} from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit{

  // creo propiedad empleado de tipo Empleado
  empleado : Empleado = new Empleado();

  constructor() {}

  ngOnInit(): void {
      
  }

  onSubmit() {
    console.log(this.empleado);
  }

}
