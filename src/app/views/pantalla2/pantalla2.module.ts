import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CoreModule } from '@app/core';
import { Pantalla2RoutingModule } from './pantalla2-routing.module';
import { Pantalla2Component } from './pantalla2.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    Pantalla2RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    Pantalla2Component
  ],
  providers: [

  ]
})
export class Pantalla2Module { }
