import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'createTip',
    templateUrl: 'app/patients/create_tip/create.template.html'
})
export class CreateComponentTip {
    tip: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: ArticlesService) { }
    create() {
        this._articlesService
            .create_tip(this.tip)
            .subscribe(createdTip => this._router.navigate(['/articles/listTip',
            createdTip._id]),
            error => this.errorMessage = error);
    }
}
