import { Component, OnInit, Input , ViewChild , ElementRef} from '@angular/core';
import { ScopeService } from '../../../services/scope.service';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              public ScopeService: ScopeService,
              private ApiService: ApiService) { }

  ngOnInit() {
 
    // En el scope se comparte la data similar a angular 1
    //this.ScopeService.scope.

    // catalogo de servicios
    /*this.ApiService.getForms({}).subscribe(
      (data: any) => {
        if(data.success){
          this.ScopeService.scope.formSol = data.data;
          console.log(data.data)
        }
      },
      error => {
        console.log(error);
      });  */
  }

  closeMenu(){
    this.ScopeService.scope.showMenu = false;
  }
}
