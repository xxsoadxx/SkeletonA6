import { Component, OnInit , Input , ElementRef , ViewChild, HostListener} from '@angular/core';
import { ScopeService } from '../../../services/scope.service';
import { GuardService } from '../../../services/jwt.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() FormTitle: String;
  user: String;
  userMenu: Boolean = false;
  @ViewChild("menubox") menubox: ElementRef;
  /*scope: any;*/

  // @HostListener('document:click', ['$event'])
  // clickout(event:any) {
  //   if(this.userMenu){
  //     if(!this.menubox.nativeElement.contains(event.target)) {
  //       this.userMenu = false;
  //       console.log('usermenu false')
  //     }
  //   }
  // }

  constructor(public ScopeService:ScopeService,
              private GuardService:GuardService,
              private ApiService: ApiService) { }

  ngOnInit() {
    this.user = this.GuardService.User;
  }


  showMenu(){
    if (this.ScopeService.scope.showMenu) {
        this.ScopeService.scope.showMenu = false;
    } else {
        this.ScopeService.scope.showMenu = true;
    }
  }

  closeUserMenu(){
    this.userMenu = false;
  }

  openUserMenu(){
    if (this.userMenu) {
      this.userMenu = false;
    } else {
      this.userMenu = true;
      setTimeout(() => this.menubox.nativeElement.focus(), 0);
      
      // console.log("focus")
    }
  }

  logoff() { 
    
    this.ApiService.logoff().subscribe(
      (data: any) => {
        if(data.success){
          location.reload();
        }
      },
      error => {
        console.log(error);
      });  
  }

}
