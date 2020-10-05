import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobticketService {

  authToken: any;
  constructor(private http: HttpClient) { }

  addJobTicket(data){
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.post('jobticket/addJobticket', data, { headers: headers });
  }
  
  addImage(image, id) {

    const headers = new HttpHeaders();
    
    const fd = new FormData();
    let filename = id;
    console.log(id)
    fd.append('image', image[0], filename);
    console.log(fd);
    return this.http.post('jobticket/addjobTicketImage', fd)
      .pipe(map(res => res));
  }
  
  closeImage(image, id) {

    const headers = new HttpHeaders();
    
    const fd = new FormData();
    let filename = id;
    console.log(id)
    fd.append('image', image[0], filename);
    console.log(fd);
    return this.http.post('jobticket/closejobTicketImage', fd)
      .pipe(map(res => res));
  }
  
  getJobTicketById(id){
    return this.http.get('jobticket/getJobticketById/' + id);
  }
  getAllJobTicket(){
    return this.http.get('jobticket/getAllJobticket');
  }
  
  updateJobTicket(data){
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.put('jobticket/closeJobTicket', data, { headers: headers });
  }
  getJobByUser(id){
    return this.http.get('jobticket/getJobByUserId/' + id);

  }
}
