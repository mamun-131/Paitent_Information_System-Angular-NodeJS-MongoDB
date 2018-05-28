System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ViewComponentVideo;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ViewComponentVideo = /** @class */ (function () {
                //
                function ViewComponentVideo() {
                    this.allowEdit = false;
                }
                //
                ViewComponentVideo.prototype.ngOnInit = function () {
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
                };
                ViewComponentVideo = __decorate([
                    core_1.Component({
                        selector: 'viewVideo',
                        templateUrl: 'app/patients/view_video/view.template.html',
                    }),
                    __metadata("design:paramtypes", [])
                ], ViewComponentVideo);
                return ViewComponentVideo;
            }());
            exports_1("ViewComponentVideo", ViewComponentVideo);
        }
    };
});
//# sourceMappingURL=view.component.js.map