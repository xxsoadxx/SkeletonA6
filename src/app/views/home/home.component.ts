import { Component, OnInit } from '@angular/core';
import { ScopeService } from '../../services/scope.service';
import { ApiService } from '../../services/api.service';
import { Router , ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup , Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  viewForm: FormGroup;
  
  

  constructor(private formBuilder: FormBuilder,
              private ScopeService:ScopeService,
              private ApiService: ApiService,
              private route: ActivatedRoute,
              private router:Router) { 
                //setea el titulo en el header va siempre
                this.ScopeService.scope.FormTitle = this.route.snapshot.data['title']}


 
  ngOnInit() {
    console.log("ngOnInit");
  }







  continuar() {
    console.log("continuar");
   /* this.ApiService.getUsers().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });

    */
  
      //this.router.navigate(['step2'],{ skipLocationChange : true }); 
  }

}
