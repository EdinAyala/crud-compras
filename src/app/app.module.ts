import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de rutas
import { ComprasComponent } from './compras/compras.component';

@NgModule({
  declarations: [
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Agrega el módulo de rutas
  ],
  providers: [],
  bootstrap: [ComprasComponent] // Puedes cambiar esto dependiendo de tu configuración
})
export class AppModule { }

