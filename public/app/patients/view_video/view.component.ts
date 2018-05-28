import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ArticlesService } from '../articles.service';
@Component({
    selector: 'viewVideo',
    templateUrl: 'app/patients/view_video/view.template.html',
})
export class ViewComponentVideo {
    user: any;
    article: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor() { }
    //
    ngOnInit() {
        // this.user = this._authenticationService.user;
        // this.paramsObserver = this._route.params.subscribe(params => {
        //     let articleId = params['articleId'];
        //     this._articlesService
        //         .read(articleId)
        //         .subscribe(
        //         article => {
        //             this.article = article;
        //           //  this.allowEdit = (this.user && this.user._id === this.
        //            //     article.creator._id);
        //         },
        //        // error => this._router.navigate(['/articles'])
        //         );
        // });
    }

}
