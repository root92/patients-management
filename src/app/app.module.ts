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
import { MdIconRegistry } from '@angular2-material/icon'

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
import { TraitementPlanComponent } from './components/traitement-plan/traitement-plan.component';
import { ListPatientsComponent } from './components/patients/list-patients/list-patients.component';
import { NewPatientComponent } from './components/patients/new-patient/new-patient.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'patients', component: PatientsComponent,
    children: [
      {path: '', redirectTo: 'listPatients', pathMatch: 'full' },
      {path: 'newPatient', component: NewPatientComponent},
      {path: 'listPatients', component: ListPatientsComponent}
    ]
  },
  {path: 'medicalInterview', component: MedicalInterviewComponent},
  {path: 'physicalExamination', component: PhysicalExaminationComponent},
  {path: 'imaging', component: ImagingComponent},
  {path: 'medication', component: MedicationComponent},
  {path: 'labs', component: LabsComponent},
  {path: 'billings', component: BillingComponent},
  {path: 'traitementPlan', component: TraitementPlanComponent}
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
    TraitementPlanComponent,
    ListPatientsComponent,
    NewPatientComponent
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
    MdListModule,
    MdIconModule
  ],

  providers: [MdIconRegistry, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
