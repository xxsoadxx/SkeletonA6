import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { notEmptyValidator } from '@app/directives/validators.directive';

const empty = {"Val": "" ,"Desc":"Seleccione"};

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss']
})

export class ComboboxComponent implements OnInit {
  
  constructor() {
  }

  @Input() options: any[];
  @Input() disabled: boolean;
  @Input() datamodel: any;
  @Input() continued: boolean; 
  @Input() required: boolean;
  @Input() readonly: boolean;
  @Input() small: boolean;

  @ViewChild('container') container:ElementRef;
  @ViewChild('list') lista:ElementRef;
  @ViewChild('input') input:ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(!this.container.nativeElement.contains(event.target)) {
      this.hideOptions = true;
    }
  }

  hoverOption : number;

  hideOptions : boolean = true;
  maxHeight : object;
  selected : any;


  ngOnInit() {
    if(this.options){
      this.options.sort((a:any, b:any) => {
        if(a.Desc < b.Desc){
          return -1;
        }else return 1;
      });
    }

    if(this.datamodel.value == "" || this.datamodel.value == null){
      this.selected = empty;
    }else{
      this.selected = this.datamodel.value;
    }

    if(this.required == undefined){
      this.datamodel.setValidators(notEmptyValidator);
    }

    this.datamodel.valueChanges.subscribe((val:any) => {
      if(val != ""){
        this.selected = val;
      }else{
        this.selected = empty;
      }
    })
  
    this.hoverOption  = 0;

  }

  selectOption(option:any){
    this.selected = option;
    this.datamodel.setValue(option);
    this.hideOptions = true;
  }

  fnCombo(){
    if(!this.disabled && !this.readonly){
      this.hideOptions = !this.hideOptions;
      if(!this.hideOptions){
        this.input.nativeElement.focus();
      }
    }
  }

  openCombo(){
    if(!this.disabled && !this.readonly){
      this.hideOptions = false;
      var isIE = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
      if(!isIE){
        this.container.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  closeCombo(event:any){
    if([37, 38, 39, 40].indexOf(event.keyCode) > -1) {
      event.preventDefault();
    }
    if(!this.disabled && !this.readonly){
      if(event.which == 9){
        this.hideOptions = true;
      }
      if(event.keyCode == 40 && this.hoverOption < (this.options.length -1)){
        this.hoverOption++;
        if(this.hoverOption > 2){
          this.lista.nativeElement.scrollTop += 49;
        }
      }else if(event.keyCode == 38 && this.hoverOption > 0){
        this.hoverOption--;
        if(this.hoverOption < this.options.length - 3){
          this.lista.nativeElement.scrollTop -= 49;
        }
      }else if(event.keyCode == 13){
        this.selectOption(this.options[this.hoverOption]);
      }
    }
  }
}
