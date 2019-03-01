import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { DatepickerComponent } from './datepicker.component';
import { DateFormatModule } from '../../../directives/dateformat/dateformat.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    DateFormatModule
  ],
  declarations:[
    DatepickerComponent
  ],
  exports:[
    DatepickerComponent    
  ]
})
export class DatePickerModule { }