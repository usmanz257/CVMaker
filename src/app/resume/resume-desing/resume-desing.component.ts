import { Component, OnInit } from '@angular/core';
import { BasicInformationModel } from 'src/app/shared/basicInfo.model';
import { summeryModel } from 'src/app/shared/summey.model';
import { SkillsModel } from 'src/app/shared/skills.model';
import { LanguagesModel } from 'src/app/shared/languages.model';
import { ExperinceModel } from 'src/app/shared/experience.model';
import { educationModel } from 'src/app/shared/education.model';
import { ResumeDataService } from 'src/app/shared/resume-data-service.service';


@Component({
  selector: 'app-resume-desing',
  templateUrl: './resume-desing.component.html',
  styleUrls: ['./resume-desing.component.css']
})
export class ResumeDesingComponent implements OnInit {
  imageURL:string;
  _userSkills: SkillsModel[]=[];
  _userLanguage: LanguagesModel[]=[];
  _userExperience: ExperinceModel[]=[];
  _userEducation: educationModel[]=[];
  _userResumeImg: File=null;
  _basicInformation: BasicInformationModel;
  _summery : summeryModel[]=[];
  constructor(private resumeDataService: ResumeDataService )
    {
      this._basicInformation = new BasicInformationModel;
      this._userSkills = this.resumeDataService.Skills;
      this._userLanguage= this.resumeDataService.Languages;
      this._userExperience= this.resumeDataService.Personal_Experience;
      this._userEducation = this.resumeDataService.Personal_Education;
      // this.imageURL = this._resumeData._imgUrl;
      this._basicInformation.FullName = this.resumeDataService.FullName;
      this._basicInformation.PhoneNumber = this.resumeDataService.PhoneNumber;
      this._basicInformation.Email = this.resumeDataService.Email;
      this._basicInformation.Websites = this.resumeDataService.Websites;
      this._basicInformation.address1 = this.resumeDataService.address1;
      this._basicInformation.address2 = this.resumeDataService.address2;
      
      this._summery = this.resumeDataService.Personal_Summery;
      
     }
  ngOnInit() {}
 
  
}
