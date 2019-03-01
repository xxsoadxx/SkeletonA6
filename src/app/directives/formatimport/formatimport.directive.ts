import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[FormatImport]'
})


export class FormatImport {
    private el: any;

    constructor(private elementRef: ElementRef) { 
        this.el = this.elementRef.nativeElement;
    }

    @Input() FormatImport: any;

    @HostListener('blur') onblur() {
        this.FormatImport.setValue(this.thousandSep(this.FormatImport.value))
    }

    @HostListener('focus') onfocus() {
        // this.el.value = this.reverse(this.el.value);
        this.FormatImport.setValue(this.reverse(this.FormatImport.value))
    }

     //Separa por miles
     thousandSep(val:number) {
        let valaux = String(val);
        let char = valaux[0];
        let i = 1;
        while (char === '0' && i < valaux.length){
            val = Number(valaux.substring(1, valaux.length))
            char = val[i];
            i++;
        }
        return String(val).split("").reverse().join("")
            .replace(/(\d{3}\B)/g, "$1.")
            .split("").reverse().join("");
    }

    //Regresa a numeros
    reverse(val:string){
        let pointind = val.indexOf('.');
        let res = '';
        if(pointind > 0){
            let auxstr = val.split('.');
            for(let i in auxstr){
                res += auxstr[i];
            }
        }else{
            res = val;
        }
        return res;
    }
}