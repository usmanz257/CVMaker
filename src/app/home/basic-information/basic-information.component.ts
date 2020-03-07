import { Component, OnInit} from '@angular/core';
import { ResumeDataService } from 'src/app/shared/resume-data-service.service';
import { CountryNameListModel } from 'src/app/shared/Country.model';
import { ConutryListService } from 'src/app/shared/conutry-list.service';
import { HttpClient} from '@angular/common/http';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit{
  Fullname:string;
  PhoneNumber:string;
  Email:string;
  websites:string;
  address1:string;
  address2:string;
  expComponent: ExperienceComponent;
  req_url= "http://localhost:2721/api/CountryNames";
  constructor(private resumeDataService: ResumeDataService,private countryNameService: ConutryListService) {
  }
  ngOnInit() {
    this.countryNameService.getCountryList();
  }
  
  setInfoValues() {
      this.resumeDataService.FullName = this.Fullname;
      this.resumeDataService.PhoneNumber = this.PhoneNumber;
      this.resumeDataService.Email = this.Email;
      this.resumeDataService.Websites = this.websites;
      this.resumeDataService.address1 = this.address1;
      this.resumeDataService.address2 = this.address2;
      // this.countryNameService.getCountryList();
      // for(let item of this.countryNameService.CountryNames){
      // console.log(item.CountryName1);
      // }
      }
  message(){
    window.alert();
  }
}
  // nexttabValue:boolean=false;

  // @Output()
  //   nexttab = new EventEmitter<boolean>();
    
  // gotoNexttab(){
  //   this.nexttabValue= true;
  //   this.nexttab.emit(this.nexttabValue);
  //  }
 

