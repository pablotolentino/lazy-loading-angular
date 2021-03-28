import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';


@NgModule({
  declarations: [ NuevoClienteComponent, EditarClienteComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
