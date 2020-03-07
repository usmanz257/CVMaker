import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ResumeDataService } from 'src/app/shared/resume-data-service.service';
@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit {
  // private userSummery:string="usman";
  userSummery: string;
  
  //RootUrl='http://localhost:2721/api/Home/ResumeData';
  RootUrl='http://localhost:2721/api/Personal_Info';
  json;
  constructor(private http: HttpClient, private resumeDataService: ResumeDataService) {
   }
  ngOnInit() {
  }
  saveSummery(){
    this.resumeDataService.Personal_Summery.push({
    userResumeSummery : this.userSummery
    });    
    this.sendResumeDataToServer().subscribe(data => {console.log(data);
    });
    // this.sendResumeDataToServer();
    console.log(this.resumeDataService)
  }
  sendResumeDataToServer(){
  return this.http.post(this.RootUrl,this.resumeDataService);
  }

}
