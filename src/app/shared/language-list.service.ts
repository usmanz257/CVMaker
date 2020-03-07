import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguagesListModel } from './languageListModel';

@Injectable({
  providedIn: 'root'
})
export class LanguageListService {
  url="http://localhost:2721/api/LanguageLists";
  LanguageList:LanguagesListModel[]=[]
  constructor(private http:HttpClient) {
    }
   getlanguageList(){
    this.http.get(this.url).toPromise().then(res => this.LanguageList = res as LanguagesListModel[]);
    console.log(this.LanguageList);
    // console.log("This is from language service" , this.filterLanguageList,languagevalue);
   }
}
