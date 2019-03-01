import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CoreModule } from '@app/core';
import { NgInit } from './ng-init';

@NgModule({
    imports: [
      CommonModule,
      TranslateModule,
      CoreModule,
      ReactiveFormsModule,
      FormsModule
    ],
    declarations:[
        NgInit,
    ],
    exports:[
        NgInit,
    ]
   })

export class NgInitModule {}

