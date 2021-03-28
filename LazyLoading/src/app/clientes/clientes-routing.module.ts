import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';


const routes: Routes = [
  {
    path:'nuevo-cliente',
    component:NuevoClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
