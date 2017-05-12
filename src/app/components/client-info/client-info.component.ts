import { Component, OnInit } from '@angular/core';
import { MdSidenavModule } from '@angular2-material/sidenav';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  sexe: ['Masculin', 'Feminin'];
  // private insured = new Insured();

  constructor() { 
    
  }

  ngOnInit() {
  }

}
