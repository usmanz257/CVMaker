import { Injectable } from '@angular/core';
import { SkillsModel } from './skills.model';
import { LanguagesModel } from './languages.model';
import { ExperinceModel } from './experience.model';
import { educationModel } from './education.model';

import { summeryModel } from './summey.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

    FullName: string="";
    Email : string="";
    PhoneNumber: string="";
    Websites: string="";
    address1: string="";
    address2: string="";
    password: string ="";
  Skills: SkillsModel[]=[];
  Languages : LanguagesModel[]=[];
  Personal_Experience: ExperinceModel[]=[];
  Personal_Education : educationModel[]=[];
  Personal_Summery : summeryModel[]=[];
  constructor() {   }

}
