/*HttpClient es una clase que permite realizar solicitudes HTTP, Injectable es un 
decorador que marca la clase como un servicio inyectable, Observable es una clase 
que representa una secuencia de valores asincrónicos y Empleado es una clase 
importada desde el archivo empleado.ts que representa un objeto de empleado. */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

/* Injectable es un decorador que se utiliza para marcar una clase como un 
servicio inyectable.
--- Le proporciona a la clase metadatos de inyección de dependencias. */
@Injectable({
  providedIn: 'root' // el servicio se proporcionará en la raíz de la app, y así estará disponible para todos los componentes y otros servicios de la app
})
export class EmpleadoService {

  // URL que obtiene el listado de empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/empleados";

  /* Es el constructor de la clase, que recibe una instancia de HttpClient como 
  inyección de dependencia. Esto permite al servicio hacer solicitudes HTTP al 
  backend.*/
  constructor(private httpClient : HttpClient) {}

  // Obtiene el listado de empleados desde el backend.
  obtenerListaDeEmpleados() : Observable<Empleado[]> {
    /* Utiliza el método get() de httpClient para hacer una solicitud GET a la 
    URL ${this.baseURL} y espera una respuesta que sea un arreglo de objetos de 
    tipo Empleado 
    La respuesta se envuelve en un Observable, lo que permite que los componentes 
    que consumen este servicio puedan suscribirse y recibir los valores de 
    empleados de forma asincrónica.
    VER ABAJO MÁS INFO SOBRE OBSERVABLE*/
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

}


/*
------------------------------ OBSERVABLE -----------------------------------

Un Observable es una clase en Angular que representa una secuencia de valores 
asincrónicos que pueden llegar en el futuro. Proporciona una forma poderosa de 
trabajar con flujos de datos y eventos asincrónicos en la programación reactiva.

En Angular, los Observables son ampliamente utilizados para trabajar con 
funcionalidades asincrónicas, como las solicitudes HTTP, eventos del usuario, 
cambios de estado, entre otros. Permiten manejar de manera más eficiente y 
flexible la respuesta a eventos y el flujo de datos en una aplicación.

Al suscribirse a un Observable, se pueden ejecutar acciones como actualizar la 
interfaz de usuario, realizar cálculos, filtrar datos, realizar operaciones de 
transformación, etc. Además, los Observables son compatibles con la programación 
reactiva, lo que permite crear flujos de datos complejos y responder a cambios 
de forma declarativa.
*/