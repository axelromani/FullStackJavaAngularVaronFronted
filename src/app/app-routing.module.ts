import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './componentesz/listar/listar.component';
import { GrabarComponent } from './componentesz/grabar/grabar.component';


const routes: Routes = [


  //Ruta General - LOCALHOST
  {
    path: '',
    redirectTo: '/varones',
    pathMatch: 'full'
  },
  {
    path: 'varones',// Ruta 'varones'
    component: ListarComponent//Me manda al componente 'Listar' - Listado Varones
  },
  {
    path: 'varon/agregar',// Ruta agregar 'varones'
    component: GrabarComponent//Me manda al componente 'Grabar' - Grabar Varones
  },
  {
    path: 'varon/editar/:id',// Ruta editar 'varones' x id
    component: GrabarComponent//Me manda al componente 'Grabar' - Grabar Varones
  }







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
