import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../../../services/patient-service.service'
import { Patient } from '../../../models/patient'

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  // onSearch: boolean = false;

  private patientCollection: Patient[];

  constructor( ) { }

  ngOnInit() {
  }

  onSearch(patientSerivce: PatientServiceService){
    patientSerivce.getPatientInfo().subscribe(patientCollection => {
      this.patientCollection = patientCollection;
    });
    console.log(this.patientCollection)
  }


}
