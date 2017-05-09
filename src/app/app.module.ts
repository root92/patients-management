import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {FlashMessagesModule} from 'angular2-flash-messages';

import {AuthService} from './services/auth-service.service';

import { AppComponent } from './app.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'client', component: ClientInfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
