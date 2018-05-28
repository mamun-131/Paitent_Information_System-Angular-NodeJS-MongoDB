import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';


declare var google: any;
@Component({
    selector: 'order',
    templateUrl: 'app/orders/order.template.html'
    
})
export class OrderComponent {
    user: any;
    articles: any;
    errorMessage: string;
    constructor(
        private _router: Router,
        private _route: ActivatedRoute,private _authenticationService: AuthenticationService) { }
    ngOnInit() {
        this.user = this._authenticationService.user;

    }




};


