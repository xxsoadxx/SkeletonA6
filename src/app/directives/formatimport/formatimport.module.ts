import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

// import { CoreModule } from '@app/core';
import { FormatImport } from './formatimport.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations:[
    FormatImport
  ],
  exports:[
    FormatImport   
  ]
})
export class FormatImportModule { }