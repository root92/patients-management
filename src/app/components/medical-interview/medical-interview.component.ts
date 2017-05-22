import { Component, OnInit } from '@angular/core';

import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdIconModule } from '@angular2-material/icon';
import { SidenavComponent } from '../partials/sidenav/sidenav.component';

@Component({
  selector: 'app-medical-interview',
  templateUrl: './medical-interview.component.html',
  styleUrls: ['./medical-interview.component.css']
})
export class MedicalInterviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
