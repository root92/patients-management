import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import {AuthServiceService} from '../../services/auth-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private FlashMessages: FlashMessagesService,
    private router: Router,
    private AuthService: AuthServiceService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    if (user.username == undefined || user.password == undefined) {
      this.FlashMessages.show('Please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } else {
      this.FlashMessages.show('You are now logged in', {cssClass: 'alert-success', timeout: 3000});
      console.log(user.username + ' ' + user.password);
      /* Login User */
      /* this.AuthService.loginUser(user).subscribe(data => {
        // TODO
      }) */
      this.router.navigate(['/client']);
      return true;
    }

  }

}
