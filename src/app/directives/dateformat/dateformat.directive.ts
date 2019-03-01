import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { dateValidator } from '@app/directives/validators.directive';
@Directive({
  selector: '[DateFormat]'
})


export class DateFormat implements OnInit{
    private el: any;
    
    constructor(private elementRef: ElementRef) { 
      this.el = this.elementRef.nativeElement;
    }

    @Input() DateFormat : any;

    ngOnInit(){
      this.DateFormat.setValidators([dateValidator, this.DateFormat.validator])
    }

    @HostListener('keyup', ['$event']) onKeyUp(event:KeyboardEvent) {
      let e = <KeyboardEvent> event;

      if(e.keyCode == 111){
        if(this.DateFormat.value != "" && this.DateFormat.value.length < 2){
          this.DateFormat.setValue('0' + this.DateFormat.value + '/');
        }else if(this.DateFormat.value != "" && this.DateFormat.value.length < 5){
          let aux = this.DateFormat.value.split("/");
          this.DateFormat.setValue(aux[0] + "/0" + aux[1] + "/");
        }
      }else if([8, 37, 39, 46].indexOf(e.keyCode) < 0){
        this.DateFormat.setValue(this.DateFormat.value.split('/').join(""));
        
        if(this.DateFormat.value != "" && this.DateFormat.value.length == 8){
          this.DateFormat.setValue(this.DateFormat.value.substring(0, 2) + "/" + this.DateFormat.value.substring(2, 4) + "/" + this.DateFormat.value.substring(4, 8))
        }

        if(this.DateFormat.value != "" && (this.DateFormat.value.length > 4 && this.DateFormat.value.length < 8) ){
          this.DateFormat.setValue(this.DateFormat.value.substring(0, 2) + "/" + this.DateFormat.value.substring(2, 4)  + "/" + this.DateFormat.value.substring(4, this.DateFormat.value.length))
        }

        if(this.DateFormat.value != "" && (this.DateFormat.value.length >= 2 && this.DateFormat.value.length <= 4) ){
          if(this.DateFormat.value.length == 2 && this.DateFormat.value[0] > 3){
            this.DateFormat.setValue("0" + this.DateFormat.value[0] + "/" + this.DateFormat.value[1]);
          }else if(this.DateFormat.value.length == 2){
            this.DateFormat.setValue(this.DateFormat.value.substring(0, 2) + "/")
          }else if(this.DateFormat.value.length == 4 && this.DateFormat.value[2] > 1){
            this.DateFormat.setValue(this.DateFormat.value.substring(0, 2) + "/0" + this.DateFormat.value[2] + "/" + this.DateFormat.value.substring(3, this.DateFormat.value.length))
          }else{
            this.DateFormat.setValue(this.DateFormat.value.substring(0, 2) + "/" + this.DateFormat.value.substring(2, this.DateFormat.value.length))
          }
        }        
      }


      // if(e.keyCode == 111){
      //   if(this.el.value != "" && this.el.value.length < 2){
      //     this.el.value = '0' + this.el.value + '/';
      //   }else if(this.el.value != "" && this.el.value.length < 5){
      //     let aux = this.el.value.split("/");
      //     this.el.value = aux[0];
      //     this.el.value += "/0" + aux[1] + "/";
      //   }
      // }else if([8, 37, 39].indexOf(e.keyCode) < 0){
      //   this.el.value = this.el.value.split('/').join("");
        
      //   if(this.el.value != "" && this.el.value.length == 8){
      //     this.el.value = this.el.value.substring(0, 2) + "/" + this.el.value.substring(2, 4) + "/" + this.el.value.substring(4, 8) 
      //   }

      //   if(this.el.value != "" && (this.el.value.length > 4 && this.el.value.length < 8) ){
      //     this.el.value = this.el.value.substring(0, 2) + "/" + this.el.value.substring(2, 4)  + "/" + this.el.value.substring(4, this.el.value.length)
      //   }

      //   if(this.el.value != "" && (this.el.value.length >= 2 && this.el.value.length <= 4) ){
      //     if(this.el.value.length == 2 && this.el.value[0] > 3){
      //       this.el.value = "0" + this.el.value[0] + "/" + this.el.value[1];
      //     }else if(this.el.value.length == 2){
      //       this.el.value = this.el.value.substring(0, 2) + "/"
      //     }else if(this.el.value.length == 4 && this.el.value[2] > 1){
      //       this.el.value = this.el.value.substring(0, 2) + "/0" + this.el.value[2] + "/" + this.el.value.substring(3, this.el.value.length)
      //     }else{
      //       this.el.value = this.el.value.substring(0, 2) + "/" + this.el.value.substring(2, this.el.value.length)
      //     }
      //   }        
      // }
    }
}

