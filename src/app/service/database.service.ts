import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization' : 'Bearer tAmI4hG225gTKgzsA0lSsom410McEJaT3ouwmtfMMoTTIvlEn3dpKnOjiURWGgvq5K5hArwXuadnxkx4tLtn5C8xKIjzLkxeYGm-l8C_Z5kgrMXiFHOsAq9zgrcaXHYx',
    
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private _dbUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=resturants&location=';
 
  constructor(private _http: HttpClient) { }

    getData(usersearches: string, userInput: string) 
      : Observable<any> {
      return this._http.get<any>(`${this._dbUrl}${usersearches}/?search=${userInput}`, httpOptions)
    };
  };