import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'viewByStudent',
    templateUrl: 'app/patients/viewByStudent/view.template.html',
})
export class ViewByStudentComponent {
    user: any;
    article: any;
    patients:any;
    patient : any;
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
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
            this._articlesService
                .articleByStudentID(studentId)
                .subscribe(
                article => {
                    this.article = article;
                    this.patient = article['0'].patientId;
                  //  console.log(this.patient['patientId']);
                   // console.log("cccc");

                    this._articlesService
                    .infoByPatientID(this.patient)
                    .subscribe(
                        patients => {
                        this.patients = patients;
                        console.log(patients);
             
                    }
                
                    );

                }
            
                );
        });



    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    //
    delete() {
        this._articlesService.delete(this.article._id).
            subscribe(deletedArticle => this._router.navigate(['/articles']),
            error => this.errorMessage = error);
    }
}
