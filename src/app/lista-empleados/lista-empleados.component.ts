import { Empleado } from './../empleado';
import { Component, OnInit } from '@angular/core';


/*
--- Selector: El selector del componente es 'app-lista-empleados'. Esto 
significa  que se puede utilizar como una etiqueta HTML en el archivo HTML de 
otro  componente para mostrar el contenido de este componente.
--- Plantilla: El archivo HTML asociado a este componente es 
'./lista-empleados.component.html'. Este archivo contiene la estructura y la 
presentación visual del componente.
--- Estilos: El archivo de hoja de estilos asociado a este componente es 
'./lista-empleados.component.css'. Este archivo contiene las reglas de estilo 
que se aplicarán al contenido del componente. 
*/
@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})

/*export es para que la clase se pueda exportar y utilizar en otros archivos
implementa la interfaz OnInt, así que debe implementar el método de esta */
export class ListaEmpleadosComponent implements OnInit{

  // Propiedad, array de objetos Empleado
  empleados:Empleado[];

  constructor() {}

  // se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    /*En este caso, se proporcionan datos de ejemplo directamente en el código, 
    pero en una aplicación real, estos datos podrían provenir de una API o una 
    base de datos. */
    this.empleados = [{
      "id":1,
      "nombre":"Estefanía",
      "apellido":"Aguas",
      "email":"estefaniaaguas@gmail.com"
    },
    {
      "id":2,
      "nombre":"Jassir",
      "apellido":"Agressoth",
      "email":"jassirbebe@gmail.com"
    }];
  }
}
