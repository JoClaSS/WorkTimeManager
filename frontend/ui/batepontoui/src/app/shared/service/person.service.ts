import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  apiUrl = 'http://localhost:8080/person';
  findByfullName = 'http://localhost:8080/person/fullname?name=';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getPersonByFullName(){
    return this.httpClient.get<Person>(this.findByfullName);
  }

  public getAll(){
    return this.httpClient.get<Person[]>(this.apiUrl);
  }
}


