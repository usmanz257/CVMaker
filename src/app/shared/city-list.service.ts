import { Injectable } from '@angular/core';
import { CityNameListModel } from './City.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityListService {
  _url="http://localhost:2721/api/CityNames";
  cityList: CityNameListModel[]=[];
  selectedCityList: CityNameListModel[]=[];
  constructor(private http: HttpClient) { }
  getCityList(countryId){
    this.http.get(this._url).toPromise().then(res=> this.cityList = res as CityNameListModel[])
    this.selectedCityList = this.cityList.filter(t => t.C_id == Number(countryId));
  }
  
}
