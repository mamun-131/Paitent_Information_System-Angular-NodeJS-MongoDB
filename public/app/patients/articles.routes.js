System.register(["./articles.component", "./create_alert/create.component", "./create_symptom/create.component", "./create_tip/create.component", "./list/list.component", "./list_alert/list.component", "./list_tip/list.component", "./view/view.component", "./viewByCourse/view.component", "./viewByStudent/view.component", "./edit/edit.component", "./create/create.component", "./view_symptom/view.component", "./view_video/view.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var articles_component_1, create_component_1, create_component_2, create_component_3, list_component_1, list_component_2, list_component_3, view_component_1, view_component_2, view_component_3, edit_component_1, create_component_4, view_component_4, view_component_5, ArticlesRoutes;
    return {
        setters: [
            function (articles_component_1_1) {
                articles_component_1 = articles_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (create_component_2_1) {
                create_component_2 = create_component_2_1;
            },
            function (create_component_3_1) {
                create_component_3 = create_component_3_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (list_component_2_1) {
                list_component_2 = list_component_2_1;
            },
            function (list_component_3_1) {
                list_component_3 = list_component_3_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (view_component_2_1) {
                view_component_2 = view_component_2_1;
            },
            function (view_component_3_1) {
                view_component_3 = view_component_3_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            },
            function (create_component_4_1) {
                create_component_4 = create_component_4_1;
            },
            function (view_component_4_1) {
                view_component_4 = view_component_4_1;
            },
            function (view_component_5_1) {
                view_component_5 = view_component_5_1;
            }
        ],
        execute: function () {
            exports_1("ArticlesRoutes", ArticlesRoutes = [{
                    path: 'articles',
                    component: articles_component_1.ArticlesComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: 'listAlert', component: list_component_2.ListComponentAlert },
                        { path: 'listTip', component: list_component_3.ListComponentTip },
                        { path: 'create', component: create_component_4.CreateComponent },
                        { path: 'createTip', component: create_component_3.CreateComponentTip },
                        { path: 'createSymptom', component: create_component_2.CreateComponentSymptom },
                        { path: 'viewSymptom', component: view_component_4.ViewBySymptomComponent },
                        { path: 'viewVideo', component: view_component_5.ViewComponentVideo },
                        { path: 'createAlert', component: create_component_1.CreateComponentAlert },
                        { path: ':articleId', component: view_component_1.ViewComponent },
                        { path: ':courseId/viewByCourse', component: view_component_2.ViewByCourseComponent },
                        { path: ':studentId/viewByStudent', component: view_component_3.ViewByStudentComponent },
                        { path: ':articleId/edit', component: edit_component_1.EditComponent }
                    ],
                },
                {
                    path: 'createAlert', component: create_component_1.CreateComponentAlert
                },
            ]);
        }
    };
});
//# sourceMappingURL=articles.routes.js.map