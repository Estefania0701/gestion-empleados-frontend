/*Estas líneas importan los módulos necesarios desde Angular. NgModule es un 
decorador que se utiliza para definir un módulo en Angular, y BrowserModule 
es un módulo que proporciona servicios y funcionalidades esenciales para 
aplicaciones web en el navegador. */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Estas líneas importan otros módulos y componentes que serán utilizados en la 
aplicación.
  - AppRoutingModule es un módulo que contiene las rutas de la aplicación.
  - AppComponent es el componente principal de la aplicación.
  - ListaEmpleadosComponent es un componente personalizado que muestra la lista 
  de empleados.
  - HttpClientModule es un módulo que permite hacer solicitudes HTTP en la 
  aplicación. */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';

/*Este bloque @NgModule define el módulo principal de la aplicación llamado 
AppModule. Aquí se especifican los componentes y módulos que se utilizan en la 
aplicación. */
@NgModule({
  declarations: [ // componentes del módulo
    AppComponent,
    ListaEmpleadosComponent
  ],
  imports: [ // importar y agregar otros módulos que se usarán en este módulo
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], // servicios que pueden ser inyectados en los componentes de la app
  bootstrap: [AppComponent] // componente principal que se inicializará cuando se cargue la app
})
export class AppModule { }
