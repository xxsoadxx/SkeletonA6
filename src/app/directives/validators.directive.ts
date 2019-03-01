import { AbstractControl } from "@angular/forms";


export function notEmptyValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if(control.value == ''){
        return { 'notEmpty' : true};
    }
    return null;
}

export function telValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if(control.value[0] == '0' && control.value[1] == '9'){
        return null;
    }else{
        return {'tel': true};
    }
}

export function dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if(control.value && control.value != ''){
        let dia = control.value.split('/')[0];
        let mes = control.value.split('/')[1];
        if(dia > 0 && dia < 32){
            if(mes > 0 && mes < 13){
                return null;
            }else{
                return { 'dateValidator' : true}
            }
        }else{
            return { 'dateValidator' : true}
        }
    }else{
        return null;
    }
}