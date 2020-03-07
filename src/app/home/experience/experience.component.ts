import { Component, OnInit } from '@angular/core';
import { ExperinceModel } from 'src/app/shared/experience.model';
import { NgForm } from '@angular/forms';
import { ResumeDataService } from 'src/app/shared/resume-data-service.service';
import { ConutryListService } from 'src/app/shared/conutry-list.service';
import { HttpClient } from '@angular/common/http';
import { CityListService } from 'src/app/shared/city-list.service';
import { CityNameListModel } from 'src/app/shared/City.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
 
  constructor(private resumeDataService: ResumeDataService, private countryNameService:ConutryListService,private cityListService:CityListService) {
   }
  ngOnInit() {
    
  }
       jobTitle: string;
       orgnization: string;
       countryId:number;
       country: string;
       city : string;
       startEDate: string;
       endEDate: string;
       ExpDetails: string;
       _tableToggle: string= "None";
       experienceModel : ExperinceModel[] = [];
      cityList:CityNameListModel[]=[];
  setExperienceValues(){
  this.experienceModel.push({
     JobTitle: this.jobTitle,
     Orgnization: this.orgnization,
     Country: this.country,
     City: this.city,
     StartDate: this.startEDate,
     EndDate: this.endEDate,
     ExpDetails: this.ExpDetails
     });
     this._tableToggle = "";
 this.resetForm();
 }
 onChange(i){
   this.countryId=i;
   this.cityListService.getCityList(this.countryId);

 }
 editValues(index){
  this.jobTitle = this.experienceModel[index].JobTitle;
  this.orgnization = this.experienceModel[index].Orgnization;
  this.country = this.experienceModel[index].Country;
  this.city = this.experienceModel[index].City;
  this.startEDate = this.experienceModel[index].StartDate;
  this.endEDate = this.experienceModel[index].EndDate;
  this.ExpDetails = this.experienceModel[index].ExpDetails; 
  }
deleteExperience(index){
this.experienceModel = this.experienceModel.filter(t => t.JobTitle !== index);
  }
 resetForm(form?:NgForm){
  if (form != null)
    form.reset();
    this.jobTitle=null;
    this.orgnization=null;
    this.country=null;
    this.city=null;
    this.startEDate = null;
    this.endEDate = null;
 
 }
 saveExperience(){
 this.resumeDataService.Personal_Experience = this.experienceModel;
}
 }
