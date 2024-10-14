import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: ComprasComponent }, // Página principal con el listado de compras
    { path: 'editar/:id', component: ComprasComponent } // Ruta para editar compra
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }