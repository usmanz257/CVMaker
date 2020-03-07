import { Component, OnInit } from '@angular/core';
import { educationModel } from 'src/app/shared/education.model';
import { NgForm } from '@angular/forms';

import { ResumeDataService } from 'src/app/shared/resume-data-service.service';
import { LanguageListService } from 'src/app/shared/language-list.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private resumeDataService: ResumeDataService,private userLanguageListService: LanguageListService) { 
  }
  ngOnInit() {
  }
  institute: string;
  location:string;
  degree:string;
  fieldOfStudy:string;
  startDate:string;
  endDate:string;
  _tableToggle: string= "None";
  educationModel : educationModel[] = [];

  setEducationValues(){
     this.educationModel.push({
       Institute: this.institute,
       Location: this.location,
       Degree: this.degree,
       FieldOfStudy: this.fieldOfStudy,
       StartDate: this.startDate,
       EndDate:this.endDate
       });
       this._tableToggle = "";
   this.resetForm();
}

resetForm(form?:NgForm){
    if (form != null)
      form.reset();
      this.institute='';
      this.location='';
      this.degree='';
      this.fieldOfStudy='';
      this.startDate = '';
      this.endDate = '';
    
  }
  deleteEducation(value){
    this.educationModel= this.educationModel.filter(t => t.Institute !== value)
 
    }
  editValues(index){
  this.institute=  this.educationModel[index].Institute;
  this.location = this.educationModel[index].Location;
  this.degree = this.educationModel[index].Degree;
  this.fieldOfStudy = this.educationModel[index].FieldOfStudy;
  this.startDate = this.educationModel[index].StartDate;
  this.endDate = this.educationModel[index].EndDate;
  }
  saveExperience(){
    this.resumeDataService.Personal_Education = this.educationModel;
    this.userLanguageListService.getlanguageList();
  }
  // educationForm = this.fb.group({
  //   institute: [''],
  //   location: [''],
  //   degree: [''],
  //   fieldOfStudy:[''],
  //   startDate: [''],
  //   endDate: [''],
    
  // })
  
}














