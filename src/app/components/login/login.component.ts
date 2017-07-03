import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

import { AuthServiceService } from '../../services/auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
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
      email: this.email,
      password: this.password
    }

    if (user.email == undefined || user.password == undefined) {
      this.FlashMessages.show('Please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    } else {;
      /* Login User */
      this.AuthService.loginUser(user).subscribe(data => {
        this.AuthService.storeToken(data.token);
        this.FlashMessages.show('You are now logged in', {cssClass: 'alert-success', timeout: 3000})
      //  this.FlashMessages.show(data.token, {cssClass: 'alert-success', timeout: 9000})
        this.router.navigate(['/home']);
      }, error => {
        this.FlashMessages.show('Your email or password is wrong!', {cssClass: 'alert-danger', timeout: 3000});
      })
      return true;
    }

  }

}
