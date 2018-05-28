System.register(["@angular/core", "@angular/router", "../../authentication/authentication.service", "../articles.service"], function (exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, articles_service_1, ViewByCourseComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            }
        ],
        execute: function () {
            ViewByCourseComponent = /** @class */ (function () {
                //
                function ViewByCourseComponent(_router, _route, _authenticationService, _articlesService) {
                    this._router = _router;
                    this._route = _route;
                    this._authenticationService = _authenticationService;
                    this._articlesService = _articlesService;
                    this.allowEdit = false;
                }
                //
                ViewByCourseComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = this._authenticationService.user;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var courseId = params['courseId'];
                        _this._articlesService
                            .articleByCourseID(courseId)
                            .subscribe(function (article) {
                            _this.article = article;
                            console.log("Mamun");
                            console.log(article);
                            console.log("Mamun");
                            // this.allowEdit = (this.user && this.user._id === this.
                            //    article.creator._id);
                        }
                        //  error => this._router.navigate(['/articles'])
                        );
                    });
                };
                //
                ViewByCourseComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                //
                ViewByCourseComponent.prototype.delete = function () {
                    var _this = this;
                    this._articlesService.delete(this.article._id).
                        subscribe(function (deletedArticle) { return _this._router.navigate(['/articles']); }, function (error) { return _this.errorMessage = error; });
                };
                ViewByCourseComponent = __decorate([
                    core_1.Component({
                        selector: 'viewByCourse',
                        templateUrl: 'app/patients/viewByCourse/view.template.html',
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        router_1.ActivatedRoute,
                        authentication_service_1.AuthenticationService,
                        articles_service_1.ArticlesService])
                ], ViewByCourseComponent);
                return ViewByCourseComponent;
            }());
            exports_1("ViewByCourseComponent", ViewByCourseComponent);
        }
    };
});
//# sourceMappingURL=view.component.js.map