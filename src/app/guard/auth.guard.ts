import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ScopeService } from '../services/scope.service';
import { GuardService } from '../services/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private ScopeService: ScopeService,
        private GuardService: GuardService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     
     

        if (this.ScopeService.scope.authenticated && this.GuardService.Token !== '') {
            if(state.url !== "/login"){
                return true;
            } else {
                this.router.navigate(['/home']);
                return false;
            }

            return true;
        } else {
            if(state.url !== "/login"){
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }

        }
    }
}