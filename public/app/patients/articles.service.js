System.register(["rxjs/Rx", "rxjs/Observable", "@angular/core", "@angular/http"], function (exports_1, context_1) {
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
    var Observable_1, core_1, http_1, ArticlesService;
    return {
        setters: [
            function (_1) {
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            ArticlesService = /** @class */ (function () {
                function ArticlesService(_http) {
                    this._http = _http;
                    this._baseURL = 'api/articles';
                }
                ArticlesService.prototype.create = function (article) {
                    return this._http
                        .post(this._baseURL, article)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.read = function (articleId) {
                    return this._http
                        .get(this._baseURL + "/" + articleId)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.articleByCourseID = function (courseId) {
                    return this._http
                        .get(this._baseURL + "/" + courseId + "/viewByCourse")
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.articleByStudentID = function (studentId) {
                    return this._http
                        .get(this._baseURL + "/" + studentId + "/viewByStudent")
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.infoByPatientID = function (patientId) {
                    return this._http
                        .get(this._baseURL + "/" + patientId + "/viewByPatientId")
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.update = function (article) {
                    return this._http
                        .put(this._baseURL + "/" + article._id, article).map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.delete = function (articleId) {
                    return this._http
                        .delete(this._baseURL + "/" + articleId)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.list = function () {
                    return this._http
                        .get(this._baseURL)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.create_alert = function (alert) {
                    return this._http
                        .post("api/alert", alert)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.list_alert = function () {
                    return this._http
                        .get("api/alert")
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.create_symptom = function (symptom) {
                    return this._http
                        .post("/api/commonSymptom", symptom)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.get_symptom = function () {
                    return this._http
                        .get("/api/commonSymptom")
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.create_tip = function (tip) {
                    return this._http
                        .post("/api/tip", tip)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.list_tip = function () {
                    return this._http
                        .get("/api/tips")
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                ArticlesService.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(JSON.parse(JSON.stringify(error)) || 'Server error');
                };
                ArticlesService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], ArticlesService);
                return ArticlesService;
            }());
            exports_1("ArticlesService", ArticlesService);
        }
    };
});
//# sourceMappingURL=articles.service.js.map