import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Check } from '../model/check';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  apiUrl = 'http://localhost:8080/check';
  postCheckIn = 'http://localhost:8080/check/in';
  postCheckOut = 'http://localhost:8080/check/out';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public saveCheckIn(cin:Check){
    return this.httpClient.post<Check>(this.postCheckIn,cin,this.httpOptions);
  }

  public saveCheckOut(cout:Check){
    return this.httpClient.post<Check>(this.postCheckOut,cout,this.httpOptions);
  }
  
}
