import { Directive, Input , OnInit } from '@angular/core';
import { ScopeService } from '../../services/scope.service';

@Directive({
    selector: '[ngInit]'
})
export class NgInit implements OnInit {
    constructor(private ScopeService:ScopeService) { }
    
    @Input() ngInitParm: any = {};

    @Input() ngInit: any;

    ngOnInit() {
        if (this.ngInit) { this.ngInit(this.ngInitParm); }
    }
}