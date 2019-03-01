import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';
import { ScopeService } from './services/scope.service';
import { ApiService } from './services/api.service';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,
              private translateService: TranslateService,
              private i18nService: I18nService,
              private cd: ChangeDetectorRef,
              public ScopeService: ScopeService,
              private apiService: ApiService) {
              }

             
          

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  remove(item:any) {
    var index = this.ScopeService.scope.alerts.indexOf(item);
    this.ScopeService.scope.alerts.splice(index, 1);
  }

  removeTimeout(item:any) {
    setTimeout(()=>{  
        var index = this.ScopeService.scope.alerts.indexOf(item);
        this.ScopeService.scope.alerts.splice(index, 1);
    }, 5000);
  }

  confirmaRechazo(rechaza:boolean){
    if(rechaza){
      let data = {
        "instancia": this.ScopeService.scope.itemSelected.Instancia,
        "action": "REJ",
        "reason": this.ScopeService.scope.razonRechazo
      }
      this.apiService.confirmForm(data).subscribe(
        (data: any) => {
            if(data.success){
              this.apiService.getForms({}).subscribe(
                (data: any) => {
                  if(data.success){
                    this.ScopeService.scope.formSol      = data.data;
                    this.ScopeService.scope.itemSelected = {};
                  }
                },
                error => {
                  console.log(error);
              }); 
            }
        },
        error => {
            console.log(error);
      });  

    }
    this.ScopeService.scope.rechaza = false;
    this.ScopeService.scope.blur = false;
}


  ngOnInit() {
    
    
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');


    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(event => {
        const title = event['title'];
        if (title) {
          this.titleService.setTitle("HSBC BackOffice | " + this.translateService.instant(title));
        }
      });
  }

}
