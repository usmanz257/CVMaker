import { Routes } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

import { ExperienceComponent } from './home/experience/experience.component';
import { ResumeDesingComponent } from './resume/resume-desing/resume-desing.component';
import { SignInComponent } from './User/sign-in/sign-in.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';



export const appRoutes: Routes =[
    {
        path: 'basicinformation', component: HomeComponent,
        children:[{path:'',component:ExperienceComponent}]
    },
    {
        path: 'experience', component: HomeComponent,
        children:[{path:'',component:ExperienceComponent}]
    },
    {
        path: 'signup', component: SignUpComponent,
    },   
    {
        path: 'signin', component: SignInComponent,
        
    },
    {
        path: 'profile', component: UserProfileComponent,
    },   
  
  
    {path: '', redirectTo:'signup', pathMatch:'full'},
    {path: 'resume', component:ResumeDesingComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
    
];