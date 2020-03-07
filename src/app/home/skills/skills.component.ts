
// }

import { Component, OnInit } from '@angular/core';
import { SkillsModel } from 'src/app/shared/skills.model';
import { NgForm } from '@angular/forms';
import { LanguagesModel } from 'src/app/shared/languages.model';
import { ResumeDataService } from 'src/app/shared/resume-data-service.service';
import { LanguageListService } from 'src/app/shared/language-list.service';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map,startWith} from'rxjs/operators';
import { LanguagesListModel } from 'src/app/shared/languageListModel';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit  {
  
  UserLanguageControl = new FormControl();
  filteredOptions : Observable<LanguagesListModel[]>; 
  Userskill:string;
  UserLanguage:string;
  language:string;
  skillButtonStatus=false;
  Skills : SkillsModel[] =[];
  Languages: LanguagesModel[]=[];
constructor(private resumeDataService: ResumeDataService, private languageListService:LanguageListService){

}  
ngOnInit(){
  this.filteredOptions = this.UserLanguageControl.valueChanges.pipe(
    startWith(''),
    map(value=>this._filter(value))
  );
}
private _filter(value:string): LanguagesListModel[]{
 const filterValue = value;
 return this.languageListService.LanguageList.filter(option => option.LanguageName.toLowerCase().includes(filterValue));
}
setSkillValues(){
  this.Skills.push({
    SkillName:this.Userskill
  });
  this.resetForm();
}
deleteSkill(value){
  this.Skills = this.Skills.filter(t => t.SkillName !== value);
  }
  displayFn(language){
    return language? language.LanguageName : undefined;
  }
setLanguages(form?:NgForm){
  console.log(this.UserLanguageControl.value)
  this.Languages.push({
    LanguageName: this.UserLanguageControl.value
  });
    this.resetForm();
}
deleteLanguage(value){
  this.Languages = this.Languages.filter(t => t.LanguageName !== value);
}

saveSkillsLanguages(){
this.resumeDataService.Skills = this.Skills;
this.resumeDataService.Languages = this.Languages;
}
resetForm(form?:NgForm){
  if (form != null)
    form.reset();
    this.Userskill = '';
}
setButtonValid(){
  this.skillButtonStatus=true;
  }
}  