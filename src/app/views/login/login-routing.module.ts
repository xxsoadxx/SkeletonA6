import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guard/auth.guard'
import { extract } from '@app/core';
import { LoginComponent } from './login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent, data: { title: extract('Login') } , canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LoginRoutingModule { }
