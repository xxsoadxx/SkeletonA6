import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../../guard/auth.guard'
const routes: Routes = [
    { path: 'home', component: HomeComponent , data: { title: extract('Gestión de Solicitudes') } , canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
