import { Injectable } from '@angular/core';
import { ResumeDataService } from './resume-data-service.service';
@Injectable()
export class ResumeData{

_userPicture : File= null;
_imgUrl : string='"/assets/user.png"';
constructor(private userDataService: ResumeDataService){}

}
