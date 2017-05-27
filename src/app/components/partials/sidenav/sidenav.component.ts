import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { AuthServiceService } from '../../../services/auth-service.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  constructor(
    private FlashMessages: FlashMessagesService,
    private router: Router,
    private AuthService: AuthServiceService
  ) { }

  ngOnInit() {

  }

  // onLogout(){
    
  //   this.AuthService.logoutUser();
  //   this.FlashMessages.show('You are now logged out', {cssClass: 'alert-success', timeout: 3000})
  //   this.router.navigate(['']);

  // }

}

