import { Directive, ElementRef, HostListener, Input } from '@angular/core';
declare function validation_digit(arg:string):any;

@Directive({
  selector: '[CiFormat]'
})


export class CiFormat {
    private el: any;
    private isMob:any;
    constructor(private elementRef: ElementRef) { 
        this.el = this.elementRef.nativeElement;
    }

    @Input() CiFormat: any

    
    //FOR MOBILE
    @HostListener('input', ['$event']) oninput(event:any) {
      
      if(this.isMob && event.inputType != "deleteContentBackward"){
        this.CiFormat.setValue(this.CiFormat.value.split('.').join(""));
        this.CiFormat.setValue(this.CiFormat.value.split('-').join(""));

        if(this.CiFormat.value != "" && (this.CiFormat.value.length >= 7) ){
          this.CiFormat.setValue(this.CiFormat.value.substring(0, 1) + "." + this.CiFormat.value.substring(1, 4)  + "." + this.CiFormat.value.substring(4, 7) + '-' + validation_digit(this.CiFormat.value))
        }

        if(this.CiFormat.value != "" && (this.CiFormat.value.length > 4 && this.CiFormat.value.length < 7) ){
          this.CiFormat.setValue(this.CiFormat.value.substring(0, 1) + "." + this.CiFormat.value.substring(1, 4)  + "." + this.CiFormat.value.substring(4, this.CiFormat.value.length))
        }

        if(this.CiFormat.value != "" && (this.CiFormat.value.length >= 1 && this.CiFormat.value.length <= 4) ){
          this.CiFormat.setValue(this.CiFormat.value.substring(0, 1) + "." + this.CiFormat.value.substring(1, this.CiFormat.value.length))
        }
      }
    }

    //FOR WEB
    @HostListener('keyup', ['$event']) onKeyUp(event:KeyboardEvent) {
      let e = <KeyboardEvent> event; 
      this.isMob = e.keyCode == 229;

      if(e.keyCode != 8 && !this.isMob){

        this.CiFormat.setValue(this.CiFormat.value.split('.').join(""));
        this.CiFormat.setValue(this.CiFormat.value.split('-').join(""));

        if(this.CiFormat.value != "" && (this.CiFormat.value.length >= 7) ){
          this.CiFormat.setValue(this.CiFormat.value.substring(0, 1) + "." + this.CiFormat.value.substring(1, 4)  + "." + this.CiFormat.value.substring(4, 7) + '-' + validation_digit(this.CiFormat.value))
        }

        if(this.CiFormat.value != "" && (this.CiFormat.value.length > 4 && this.CiFormat.value.length < 7) ){
          this.CiFormat.setValue(this.CiFormat.value.substring(0, 1) + "." + this.CiFormat.value.substring(1, 4)  + "." + this.CiFormat.value.substring(4, this.CiFormat.value.length))
        }

        if(this.CiFormat.value != "" && (this.CiFormat.value.length >= 1 && this.CiFormat.value.length <= 4) ){
          this.CiFormat.setValue(this.CiFormat.value.substring(0, 1) + "." + this.CiFormat.value.substring(1, this.CiFormat.value.length))
        }

      }
    }

    // @HostListener('keyup', ['$event']) onKeyUp(event:KeyboardEvent) {
    //       let e = <KeyboardEvent> event;

    //       if(e.keyCode != 8){

    //         this.el.value = this.el.value.split('.').join("");
    //         this.el.value = this.el.value.split('-').join("");
              
    //         if(this.el.value != "" && (this.el.value.length >= 7) ){
    //           this.el.value = this.el.value.substring(0, 1) + "." + this.el.value.substring(1, 4)  + "." + this.el.value.substring(4, 7) + '-' + validation_digit(this.el.value)
    //         }
    //         if(this.el.value != "" && (this.el.value.length >= 4 && this.el.value.length < 7) ){
    //           this.el.value = this.el.value.substring(0, 1) + "." + this.el.value.substring(1, 4)  + "." + this.el.value.substring(4, this.el.value.length)
    //         }
    //         if(this.el.value != "" && (this.el.value.length >= 1 && this.el.value.length <= 4) ){
    //           this.el.value = this.el.value.substring(0, 1) + "." + this.el.value.substring(1, this.el.value.length)
    //         }
  
    //       }
    // }
}

