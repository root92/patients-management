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
// import { ClientInfoComponent } from './components/client-info/client-info.component';
import { HomeComponent } from './components/home/home.component';
import { PatientsComponent } from './components/patients/patients.component';
import { SidenavComponent } from './components/partials/sidenav/sidenav.component';
import { ToolbarComponent } from './components/partials/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { MedicalInterviewComponent } from './components/medical-interview/medical-interview.component';
import { PhysicalExaminationComponent } from './components/physical-examination/physical-examination.component';
import { ImagingComponent } from './components/imaging/imaging.component';
import { MedicationComponent } from './components/medication/medication.component';
import { LabsComponent } from './components/labs/labs.component';
import { BillingComponent } from './components/billing/billing.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'medicalInterview', component: MedicalInterviewComponent},
  {path: 'physicalExamination', component: PhysicalExaminationComponent},
  {path: 'imaging', component: ImagingComponent},
  {path: 'medication', component: MedicationComponent},
  {path: 'labs', component: LabsComponent},
  {path: 'billings', component: BillingComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    // ClientInfoComponent,
    HomeComponent,
    PatientsComponent,
    SidenavComponent,
    ToolbarComponent,
    LoginComponent,
    MedicalInterviewComponent,
    PhysicalExaminationComponent,
    ImagingComponent,
    MedicationComponent,
    LabsComponent,
    BillingComponent,
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
