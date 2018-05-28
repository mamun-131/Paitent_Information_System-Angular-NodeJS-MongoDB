import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'listTip',
    templateUrl: 'app/patients/list_tip/list.template.html'
    
})
export class ListComponentTip {
    user: any;
    tips: any;
    errorMessage: string;
    constructor(private _articlesService: ArticlesService,
        private _router: Router,
        private _route: ActivatedRoute,private _authenticationService: AuthenticationService) { }
    ngOnInit() {
        this.user = this._authenticationService.user;
        this._articlesService.list_tip().subscribe(tips => this.tips
            = tips);
            console.log("ggggggg");
            console.log(this.tips);
    }

}

