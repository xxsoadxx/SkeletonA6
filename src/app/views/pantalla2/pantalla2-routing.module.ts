import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Pantalla2Component } from './pantalla2.component';
import { AuthGuard } from '../../guard/auth.guard'
const routes: Routes = [
    { path: 'pantalla2', component: Pantalla2Component , data: { title: extract('Pantalla 2') } , canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Pantalla2RoutingModule { }
