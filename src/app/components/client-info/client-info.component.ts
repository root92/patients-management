import { Component, OnInit } from '@angular/core';

import {FlashMessagesModule} from 'angular2-flash-messages';

import { MdSidenavModule } from '@angular2-material/sidenav';
import { SidenavComponent } from '../partials/sidenav/sidenav.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  sexe: ['Masculin', 'Feminin'];
  Title = 'Client';
  constructor() { 
    
  }

  ngOnInit() {
  }

}
