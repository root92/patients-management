import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceService {

  constructor(private http: Http) { }

  loginUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://apiurl.com', user, {headers: headers})
    .map(res => res.json());
  }
}
