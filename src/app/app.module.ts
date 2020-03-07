import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { appRoutes } from './routes';
import { HttpClientModule} from '@angular/common/http';
//Component
//User

import { SignUpComponent } from './user/sign-up/sign-up.component';
//CV
import { HomeComponent } from './home/home.component';
import { BasicInformationComponent } from './home/basic-information/basic-information.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { EducationComponent } from './home/education/education.component';
import { SkillsComponent } from './home/skills/skills.component';
import { SummeryComponent } from './home/summery/summery.component';
import { FooterComponent } from './footer/footer.component';
import { ResumeDesingComponent } from './resume/resume-desing/resume-desing.component';
//Models
import { ResumeData } from './shared/resumeData.model';
import { ResumeDataService } from './shared/resume-data-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignInComponent } from './User/sign-in/sign-in.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    BasicInformationComponent,
    ExperienceComponent,
    EducationComponent,
    SummeryComponent,
    SkillsComponent,
    FooterComponent,
    ResumeDesingComponent,
    SignInComponent,
    UserProfileComponent,
    
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  bootstrap: [AppComponent],
  providers: [ResumeData,ResumeDataService],
})
export class AppModule { }
