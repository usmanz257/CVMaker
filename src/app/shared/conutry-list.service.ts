import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CountryNameListModel } from './Country.model';
@Injectable({
  providedIn: 'root'
})
export class ConutryListService {
    req_url= "http://localhost:2721/api/CountryNames";
    CountryNames: CountryNameListModel[]=[];
    constructor(private http:HttpClient) { }
  getCountryList(){
    this.http.get(this.req_url).toPromise().then(res=> this.CountryNames = res as CountryNameListModel[]);
  }
}
