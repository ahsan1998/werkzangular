import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url : String = 'http://13.58.104.199:4000/';
  authToken: any;
  constructor(private http: HttpClient) { }
  addCategory(data){
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + 'category/addCategory', data, { headers: headers });
  }
  getAllCategory(){
    return this.http.get(this.url + 'category/getAllCategory');
  }
  removeCategory(id){
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.delete(this.url + 'category/removeCategory/'+ id);
  }
  getCategoryById(id){
    return this.http.get(this.url + 'category/getCategoryById/' + id);
  }
}
