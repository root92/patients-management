import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceService {

  constructor(private http: Http) { }

  loginUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/v1/auth/login/', user, {headers: headers})
    .map(res => res.json());
  }

  // logoutUser(){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get('http://localhost:8000/api/v1/auth/logout/', {headers: headers})
  //   .map(res => res.json());
  // }
}
