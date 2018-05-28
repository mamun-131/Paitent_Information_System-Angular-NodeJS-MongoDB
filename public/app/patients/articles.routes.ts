import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { CreateComponentAlert } from './create_alert/create.component';
import { CreateComponentSymptom } from './create_symptom/create.component';
import { CreateComponentTip } from './create_tip/create.component';
//import { CreateAlertComponent } from './create_alert/create_alert.component';
import { ListComponent } from './list/list.component';
import { ListComponentAlert } from './list_alert/list.component';
import { ListComponentTip } from './list_tip/list.component';
import { ViewComponent } from './view/view.component';
import { ViewByCourseComponent } from './viewByCourse/view.component';
import { ViewByStudentComponent } from './viewByStudent/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ViewBySymptomComponent } from './view_symptom/view.component';
import { ViewComponentVideo } from './view_video/view.component';
export const ArticlesRoutes: Routes = [{
    path: 'articles',
    component: ArticlesComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'listAlert', component: ListComponentAlert },
        { path: 'listTip', component: ListComponentTip },
        { path: 'create', component: CreateComponent },
        { path: 'createTip', component: CreateComponentTip },
        { path: 'createSymptom', component: CreateComponentSymptom },
        { path: 'viewSymptom', component: ViewBySymptomComponent },   
        { path: 'viewVideo', component: ViewComponentVideo },     
        { path: 'createAlert', component: CreateComponentAlert },
        { path: ':articleId', component: ViewComponent },
        { path: ':courseId/viewByCourse', component: ViewByCourseComponent },
        { path: ':studentId/viewByStudent', component: ViewByStudentComponent },
        { path: ':articleId/edit', component: EditComponent }
    ],
},
{ 
  path: 'createAlert', component: CreateComponentAlert 
},
// { 
//   path: 'createSymptom', component: CreateComponentSymptom
// }
// ,
// { 
//   path: 'viewSymptom', component: ViewBySymptomComponent
// }
];

