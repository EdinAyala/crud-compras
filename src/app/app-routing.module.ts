import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  { path: '', redirectTo: '/compras', pathMatch: 'full' }, // Redirige a la página de compras
  { path: 'compras', component: ComprasComponent },
  // Puedes agregar más rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

