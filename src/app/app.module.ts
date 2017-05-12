import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

// import { MdCardModule, MdSidenavModule } from '@angular/material';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdListModule } from '@angular2-material/list';
import 'hammerjs';

import {FlashMessagesModule} from 'angular2-flash-messages';

import {AuthServiceService} from './services/auth-service.service';

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
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule
  ],

  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
