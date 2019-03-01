import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { ComboboxComponent } from './combobox.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations:[
    ComboboxComponent
  ],
  exports:[
    ComboboxComponent    
  ]
})
export class ComboboxModule { }