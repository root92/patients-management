import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Patient } from '../models/patient'
// import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class PatientServiceService {

  public patientCollection : Patient[];

  constructor(private http: Http) { 

  }

  getPatientInfo(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/v1//', {headers: headers}).map(res => {
      this.patientCollection = res.json();

      return this.patientCollection;
    });

  }

  // addPatient(patient: Patient): PatientServiceService {
  //   this.patientCollection.unshift(patient);

  //   return this;

  // }

}
