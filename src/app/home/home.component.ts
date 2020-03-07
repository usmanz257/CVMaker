import { Component, OnInit } from '@angular/core';
import { ResumeData } from '../shared/resumeData.model';


  @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {  
nexttab : boolean;

imageURL="/assets/user.png";
fillToUpload : File= null;
  constructor(private _resumeData: ResumeData) {
  }
  ngOnInit() {
  }
  handleFileInput(file : FileList){
    this.fillToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageURL = event.target.result;
    }
    reader.readAsDataURL(this.fillToUpload);
  }
  // acceptingTab($event) : void{
  //   this.nexttab =$event;
  //   console.log(this.nexttab);
  //      if(this.nexttab = true)
  //         {
            
  //         }
  // }
}
