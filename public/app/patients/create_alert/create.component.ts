import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'createAlert',
    templateUrl: 'app/patients/create_alert/create.template.html'
})
export class CreateComponentAlert {
    alert: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: ArticlesService) { }
    create() {
        this._articlesService
            .create_alert(this.alert)
            .subscribe(createdArticle => this._router.navigate(['/articles/list_alert',
                createdArticle._id]),
            error => this.errorMessage = error);
    }
}
