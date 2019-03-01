import { Injectable } from '@angular/core';

@Injectable()
export class ScopeService {
  scope: any = {
    FormTitle:"",
    showMenu:false,
    loading:false,
    alerts:[],
    authenticated:false,
    itemSelected:{},
  };
}
