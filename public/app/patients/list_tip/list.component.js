System.register(["@angular/core", "../articles.service", "@angular/router", "../../authentication/authentication.service"], function (exports_1, context_1) {
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
    var core_1, articles_service_1, router_1, authentication_service_1, ListComponentTip;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }
        ],
        execute: function () {
            ListComponentTip = /** @class */ (function () {
                function ListComponentTip(_articlesService, _router, _route, _authenticationService) {
                    this._articlesService = _articlesService;
                    this._router = _router;
                    this._route = _route;
                    this._authenticationService = _authenticationService;
                }
                ListComponentTip.prototype.ngOnInit = function () {
                    var _this = this;
                    this.user = this._authenticationService.user;
                    this._articlesService.list_tip().subscribe(function (tips) { return _this.tips
                        = tips; });
                    console.log("ggggggg");
                    console.log(this.tips);
                };
                ListComponentTip = __decorate([
                    core_1.Component({
                        selector: 'listTip',
                        templateUrl: 'app/patients/list_tip/list.template.html'
                    }),
                    __metadata("design:paramtypes", [articles_service_1.ArticlesService,
                        router_1.Router,
                        router_1.ActivatedRoute, authentication_service_1.AuthenticationService])
                ], ListComponentTip);
                return ListComponentTip;
            }());
            exports_1("ListComponentTip", ListComponentTip);
        }
    };
});
//# sourceMappingURL=list.component.js.map