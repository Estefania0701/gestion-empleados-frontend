import { EmpleadoService } from '../empleado.service';
import { Empleado } from './../empleado';
import { Component, OnInit } from '@angular/core'; //decoradores e interfaces de Angular necesarios para definir un componente
import { Router } from '@angular/router';


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

  /* Recibe una instancia de EmpleadoService como inyección de dependencia. 
  Esto permite que el componente acceda al servicio para obtener los empleados.*/
  constructor(private empleadoServicio : EmpleadoService, private router : Router) {}

  // se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    this.obtenerEmpleados(); // obtengo la lista de empleados
  }

  /* Utiliza el servicio empleadoServicio para obtener la lista de empleados. 
  Se suscribe al Observable devuelto por el método obtenerListaDeEmpleados() 
  del servicio. Cuando se reciben los datos (empleados), se asignan a la 
  propiedad empleados del componente.
  VER ABAJO MÁS INFO SOBRE SUSCRIBIRSE */
  private obtenerEmpleados() {
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

  actualizarEmpleado(id : number) {
    this.router.navigate(['actualizar-empleado', id]);
  }

  eliminarEmpleado(id : number) {
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
    this.obtenerEmpleados();
    });
  }

  verDetallesDelEmpleado(id : number) {
    this.router.navigate(["empleado-detalles", id]);
  }


}


/* 
---------------------------------- SUSCRIBIRSE ------------------------------

Cuando se trabaja con Observables en Angular, la acción de suscribirse significa 
establecer una conexión entre el Observable y un observador (también conocido 
  como suscriptor). El observador es un objeto que define cómo manejar los 
  valores emitidos por el Observable.

La suscripción se realiza llamando al método subscribe() del Observable y 
proporcionando uno o varios callbacks que se ejecutarán cuando se emitan valores, 
se produzcan errores o se complete el flujo de datos. Estos callbacks se definen 
como funciones anónimas o funciones definidas previamente.

El método subscribe() acepta hasta tres argumentos:
  - next: Este argumento es una función que se ejecuta cuando se emite un nuevo 
  valor en el Observable. El valor emitido se pasa como argumento a esta función. 
  Es en este callback donde se manejan los valores recibidos y se realizan las 
  acciones necesarias.
  - error: Este argumento es una función que se ejecuta cuando se produce un 
  error en el Observable. El error se pasa como argumento a esta función. Aquí 
  se manejan los errores y se toman las medidas necesarias, como mostrar un 
  mensaje de error o realizar alguna acción específica.
  - complete: Este argumento es una función que se ejecuta cuando el Observable 
  completa su flujo de datos, es decir, cuando no hay más valores que emitir. 
  Este callback se utiliza para realizar acciones de limpieza o finalización, 
  por ejemplo, deshabilitar un botón o cerrar una suscripción.

Una vez que te has suscrito a un Observable, el observador permanece a la espera 
de que se emitan valores y ejecuta los callbacks correspondientes de acuerdo a 
los eventos ocurridos. La suscripción se mantiene activa hasta que se complete, 
se cancele explícitamente o se produzca un error.

Es importante destacar que es recomendable desuscribirse de un Observable 
cuando ya no se necesita recibir más valores. Esto se hace llamando al método 
unsubscribe() en el objeto devuelto por el método subscribe(). La desuscripción 
libera recursos y evita posibles fugas de memoria.*/
