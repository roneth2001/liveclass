import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { JoinClassComponent } from './pages/join-class/join-class.component';
import { CreatClassComponent } from './pages/creat-class/creat-class.component';
import { LectuerDashComponent } from './dashboard/lectuer-dash/lectuer-dash.component';
import { StudentDashComponent } from './dashboard/student-dash/student-dash.component';
import { LectureClassViweComponent } from './dashboard/lecture-class-viwe/lecture-class-viwe.component';
import { StudentClassViweComponent } from './dashboard/student-class-viwe/student-class-viwe.component';

export const routes: Routes = [
    {
        path:"",
        component: SigninComponent
    },
    {
        path:"signup",
        component: SignupComponent
    },
    {
        path: "join-class",
        component: JoinClassComponent
    },
    {
        path: "create-class",
        component: CreatClassComponent
    },
    {
        path: "lecturer-dash",
        component: LectuerDashComponent
    },
    {
        path: "student-dash",
        component: StudentDashComponent
    },
    {
        path: "lecturer-clas-view",
        component: LectureClassViweComponent
    },
    {
        path: "student-class-view",
        component: StudentClassViweComponent
    }
];
