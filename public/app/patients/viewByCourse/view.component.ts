﻿import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'viewByCourse',
    templateUrl: 'app/patients/viewByCourse/view.template.html',
})
export class ViewByCourseComponent {
    user: any;
    article: any;
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
            let courseId = params['courseId'];
            this._articlesService
                .articleByCourseID(courseId)
                .subscribe(
                article => {
                    this.article = article;
                    console.log("Mamun");
                    console.log(article);
                    console.log("Mamun");
                   // this.allowEdit = (this.user && this.user._id === this.
                    //    article.creator._id);
                }
              //  error => this._router.navigate(['/articles'])
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
