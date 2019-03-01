import { Component, OnInit } from '@angular/core';
import { ScopeService } from '../../services/scope.service';
import { GuardService } from '../../services/jwt.service';
import { ApiService } from '../../services/api.service';
import { Router , ActivatedRoute} from "@angular/router";
import { FormBuilder, FormGroup , Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  viewForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
              public ScopeService:ScopeService,
              private ApiService: ApiService,
              private GuardService: GuardService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.viewForm = this.formBuilder.group({
        User: ['', Validators.required],
        Password: ['', Validators.required],
    });
  }

  get f() { return this.viewForm.controls; }

  continuar() {
    if (this.viewForm.valid) {
      let logindata = {
        user: this.f.User.value,
        pass: this.f.Password.value
      }
  
      this.ApiService.login(logindata).subscribe(
        (data: any) => {
          if(data.success){
            this.GuardService.User = this.f.User.value;
            this.GuardService.Token = data.data.token;
            this.ScopeService.scope.authenticated = true;

            //navega a estado
            this.router.navigate(['home']);
          }
        },
        error => {
          console.log(error);
        });  
    } else {
      this.ScopeService.scope.alerts.push({severity:'E',message:"Complete la información solicitada para ingresar "})
    }
   
  }

}
