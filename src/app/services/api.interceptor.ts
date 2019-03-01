import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScopeService } from '../services/scope.service';
import { GuardService } from '../services/jwt.service';

import { tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	constructor(private ScopeService:ScopeService,
				private GuardService:GuardService,
				private router: Router) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.ScopeService.scope.loading = true;

		if (this.ScopeService.scope.authenticated && this.GuardService.Token !== "") {
            request = request.clone({
                setHeaders: { 
                    fronthash: this.GuardService.Token.toString()
                }
            });
        }

        return next.handle(request).pipe(
	        tap(event => {
	          if (event instanceof HttpResponse) {
	            this.ScopeService.scope.loading = false;
	            
	            // http response status codce
                // console.log(event.status);
				// console.log(event.body);
				if(event.body.message != ''){
					this.ScopeService.scope.alerts.push({severity:event.body.severity,message:event.body.message})
				}
				
	          }
	        }, error => {
				this.ScopeService.scope.loading = false;
				if (error.status === 401) {
					console.log("LOGOFF");
					this.GuardService.Token = "";
					this.ScopeService.scope.authenticated = false;
					this.router.navigate(['/login']);
					//location.reload(true);

				}else{

					this.ScopeService.scope.alerts.push({severity:'E',message:"Error en la comunicación"})
					// http response status code
 
				    console.error(error.status);
				    console.error(error.message);
				}
	          	
	        })
	      )
    }
}






