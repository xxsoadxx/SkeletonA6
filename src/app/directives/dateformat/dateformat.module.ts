import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { DateFormat } from './dateformat.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations:[
    DateFormat
  ],
  exports:[
    DateFormat
  ]
})
export class DateFormatModule { }