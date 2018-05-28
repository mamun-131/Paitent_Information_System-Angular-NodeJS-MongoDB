import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'viewByCourse',
    templateUrl: 'app/patients/view_symptom/view.template.html',
})
export class ViewBySymptomComponent {
    user: any;
    symptom: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _articlesService: ArticlesService) { }
    //
    ngOnInit() {
   
       
            this._articlesService
                .get_symptom()
                .subscribe(
                symptom => {
                    this.symptom = this._articlesService.symptomResult;
                    console.log("Mamun");
                    console.log(this.symptom);
                    console.log("Mamun");
                    console.log(this._articlesService.symptomResult);
         
                }
           
                );
        
            }

}
