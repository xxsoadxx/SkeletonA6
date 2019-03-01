import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

// import { CoreModule } from '@app/core';
import { CiFormat } from './ciformat.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations:[
    CiFormat
  ],
  exports:[
    CiFormat    
  ]
})
export class CiFormatModule { }