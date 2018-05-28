System.register(["@angular/core", "@angular/router", "../articles.service"], function (exports_1, context_1) {
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
    var core_1, router_1, articles_service_1, CreateComponentTip;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            }
        ],
        execute: function () {
            CreateComponentTip = /** @class */ (function () {
                function CreateComponentTip(_router, _articlesService) {
                    this._router = _router;
                    this._articlesService = _articlesService;
                    this.tip = {};
                }
                CreateComponentTip.prototype.create = function () {
                    var _this = this;
                    this._articlesService
                        .create_tip(this.tip)
                        .subscribe(function (createdTip) { return _this._router.navigate(['/articles/listTip',
                        createdTip._id]); }, function (error) { return _this.errorMessage = error; });
                };
                CreateComponentTip = __decorate([
                    core_1.Component({
                        selector: 'createTip',
                        templateUrl: 'app/patients/create_tip/create.template.html'
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        articles_service_1.ArticlesService])
                ], CreateComponentTip);
                return CreateComponentTip;
            }());
            exports_1("CreateComponentTip", CreateComponentTip);
        }
    };
});
//# sourceMappingURL=create.component.js.map