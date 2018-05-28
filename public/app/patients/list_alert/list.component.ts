import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'listAlert',
    templateUrl: 'app/patients/list_alert/list.template.html'
    
})
export class ListComponentAlert {
    user: any;
    alerts: any;
    errorMessage: string;
    constructor(private _articlesService: ArticlesService,
        private _router: Router,
        private _route: ActivatedRoute,private _authenticationService: AuthenticationService) { }
    ngOnInit() {
        this.user = this._authenticationService.user;
        this._articlesService.list_alert().subscribe(alerts => this.alerts
            = alerts);
            console.log("ooooooooooo");
            
    }

    aaa () {
        this._router.navigateByUrl('/articles/create');
};
}

