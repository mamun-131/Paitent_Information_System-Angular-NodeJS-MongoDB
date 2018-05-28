import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'createSymptom',
    templateUrl: 'app/patients/create_symptom/create.template.html'
})
export class CreateComponentSymptom {
    symptom: any = {};
    createdSymptom: any;
    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: ArticlesService) { }
    create() {
        this._articlesService
            .create_symptom(this.symptom)
            .subscribe(createdSymptom => this._router.navigate(['/articles/viewSymptom'],
            this._articlesService.symptomResult=createdSymptom),
            error => this.errorMessage = error);
            
            console.log("CreateSymp");
           // console.log(this.createdSymptom._id);
    }
}
