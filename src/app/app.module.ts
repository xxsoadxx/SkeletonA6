import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';


//imports de pantalla
import { HomeModule } from './views/home/home.module';
import { LoginModule } from './views/login/login.module';
import { Pantalla2Module } from './views/pantalla2/pantalla2.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './views/common/header/header.component';
import { NavigationComponent } from './views/common/navigation/navigation.component';
import { ScopeService } from './services/scope.service';
import { ApiService } from './services/api.service';
import { ApiInterceptor } from './services/api.interceptor';
import { GuardService } from './services/jwt.service';
import { NgInitModule } from './directives/ng-init/ng-init.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
 
import { GrdFilterPipe } from './filters/grd-filter.pipe';

import { AuthGuard } from './guard/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,

    //Modulos de pantalla
    LoginModule,
    HomeModule,
    Pantalla2Module,

    AppRoutingModule,
    NgInitModule,
    NgScrollbarModule
  ],
  declarations: [AppComponent, HeaderComponent , NavigationComponent , GrdFilterPipe],
  providers: [
    AuthGuard,
    GuardService,
    ScopeService,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
