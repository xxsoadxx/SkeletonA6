import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})


export class OnlyNumber {

    private el: any;
    private isMob: any;

    regexStr = '^[0-9]*$';

    constructor(private elementRef: ElementRef) { 
        this.el = this.elementRef;
    }

    @Input() OnlyNumber: any;

    //FOR MOBILE
    @HostListener('input', ['$event']) oninput(event:any) {
        let value = '';
        for(let i in this.OnlyNumber.value){
            if(["0","1","2","3","4","5","6","7","8","9","/",".","-"].indexOf(this.OnlyNumber.value[i]) != -1){
                value += this.OnlyNumber.value[i];
            }
        }
        this.OnlyNumber.setValue(value);
        if(this.OnlyNumber.value == ""){
            this.OnlyNumber.reset();
        }
    }
    
    @HostListener('keydown', ['$event']) onKeyDown(event:KeyboardEvent) {
        let e = <KeyboardEvent> event;
        // console.log(e);
        this.isMob = e.keyCode == 229;


        if(!this.isMob){
            // Allow: backspace, delete, tab, escape, enter and .
            if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || 

                // Allow: Ctrl+A
                (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||

                // Allow: Ctrl+C
                (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||

                // Allow: Ctrl+X
                (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||

                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39) ||

                //Disable AltGr + number
                //Allow numbers but not alt + number or shift + number
                ((['|', '@', '#', '~', '€', '¬'].indexOf(e.key[0]) === -1) && ((!e.shiftKey && !e.altKey) && ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))))) {

                // let it happen, don't do anything
                    return;
            }else{            
                e.preventDefault();
                return;
            }
        }
    }              
}