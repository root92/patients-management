import { Component, OnInit } from '@angular/core';

import { MdSidenavModule } from '@angular2-material/sidenav';
import { SidenavComponent } from '../partials/sidenav/sidenav.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
Title = "Add new patient";
  constructor() { }

  ngOnInit() {
  }

}
