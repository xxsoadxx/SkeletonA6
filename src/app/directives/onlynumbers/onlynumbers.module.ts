import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

// import { CoreModule } from '@app/core';
import { OnlyNumber } from './onlynumbers.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations:[
    OnlyNumber
  ],
  exports:[
    OnlyNumber
  ]
})
export class OnlyNumberModule { }