/*Código para configurar las rutas de la aplicación. Permite definir las rutas y 
asociarlas a componentes específicos. */

import { NgModule } from '@angular/core'; // para definir y configurar los módulos
import { RouterModule, Routes } from '@angular/router'; // para configurar las rutas de la app
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';

// configuro las rutas al entrar al navegador
/* Cada objeto Route representa una ruta de la aplicación y contiene propiedades 
como path (ruta URL) y component (componente asociado). */
const routes: Routes = [
  {path : 'empleados', component: ListaEmpleadosComponent}, // cuando ingrese a "/empleados" se redirecciona a la lista de empleados
  {path : '', redirectTo: 'empleados', pathMatch: 'full'}, // si no especifico una ruta, se redirecciona a "/empleados"
  {path : 'registrar-empleado', component: RegistrarEmpleadoComponent},
  {path : 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent}
];

// configura el módulo de enrutamiento de la aplicación.
/* El método forRoot() toma las rutas definidas en la constante routes y las 
configura como las rutas principales de la aplicación. */
@NgModule({
  imports: [RouterModule.forRoot(routes)], // configuro las rutas raíz de la aplicación
  exports: [RouterModule] // exporto el módulo para que pueda ser usado en otros módulos
})

/* Exporto la clase AppRoutingModule que representa el módulo de enrutamiento 
de la aplicación. */
export class AppRoutingModule { }
