// Este código define el componente RegistrarEmpleadoComponent en Angular.

import { Component, OnInit} from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit{

  // creo propiedad empleado de tipo Empleado
  empleado : Empleado = new Empleado();

  /* Se inyectan los servicios EmpleadoService y Router en las propiedades 
  empleadoServicio y router, respectivamente. */
  constructor(private empleadoServicio : EmpleadoService, private router : Router) {}

  ngOnInit(): void {    
  }

  /* Se ejecuta al hacer click en el botón "Guardar" del formulario
  Llama al método registrarEmpleado del servicio EmpleadoService, pasándole el 
  objeto empleado. Luego, se suscribe al resultado del servicio utilizando el 
  método subscribe. Si la operación es exitosa, muestra el resultado en la consola 
  y redirige al usuario a la lista de empleados. Si ocurre algún error, lo muestra
  en la consola.*/
  guardarEmpleado() : void {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, error => console.log(error));
  }

  // Redirige a la lsita de empleados después de guardar un empleado
  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados'])
  }

  onSubmit() {
    console.log(this.empleado);
  }

}
