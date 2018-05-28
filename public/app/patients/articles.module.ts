import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesRoutes } from './articles.routes';
import { ArticlesComponent } from './articles.component';
//import { CreateAlertComponent } from './create_alert/create_alert.component';
import { CreateComponentAlert } from './create_alert/create.component';
import { CreateComponentSymptom } from './create_symptom/create.component';
//import { CreateComponentAlert } from './create_alert/create.component';
import { ListComponent } from './list/list.component';
import { ListComponentAlert } from './list_alert/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ViewByCourseComponent } from './viewByCourse/view.component';
import { ViewByStudentComponent } from './viewByStudent/view.component';
import { CreateComponent } from './create/create.component';
import { ViewBySymptomComponent } from './view_symptom/view.component';
import { ViewComponentVideo } from './view_video/view.component';
import { ListComponentTip } from './list_tip/list.component';
import { CreateComponentTip } from './create_tip/create.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(ArticlesRoutes),
    ],
    declarations: [
        ArticlesComponent,
        CreateComponentAlert,
        CreateComponent,
        ListComponent,
        ListComponentAlert,
        ViewComponent,
        EditComponent,
        ViewByCourseComponent,
        ViewByStudentComponent,
        CreateComponentSymptom,
        ViewBySymptomComponent,
        ViewComponentVideo,
        ListComponentTip,
        CreateComponentTip
    ]
})
export class ArticlesModule { }
