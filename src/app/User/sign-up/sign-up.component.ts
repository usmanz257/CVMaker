import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from 'src/app/shared/resume-data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  Fullname:string;
  PhoneNumber:string;
  Email:string;
  websites:string;
  address1:string;
  address2:string;
  password:string;
  confirmPassword: string;
  RootUrl='http://localhost:2721/api/Personal_Info';
  constructor(private http: HttpClient, private resumeDataService: ResumeDataService) { }

  ngOnInit() {
  }
  setInfoValues() {
    this.resumeDataService.FullName = this.Fullname;
    this.resumeDataService.PhoneNumber = this.PhoneNumber;
    this.resumeDataService.Email = this.Email;
    this.resumeDataService.Websites = this.websites;
    this.resumeDataService.address1 = this.address1;
    this.resumeDataService.address2 = this.address2;
    this.resumeDataService.password=this.password;
    this.sendResumeDataToServer().subscribe(data => {console.log(data);
    });
    }
    sendResumeDataToServer(){
      return this.http.post(this.RootUrl,this.resumeDataService);
      }
}
// ,
//   styleUrls: ['./sign-up.component.css']