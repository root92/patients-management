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

import { DataTableModule } from 'angular-2-data-table';

import 'hammerjs';

import {FlashMessagesModule} from 'angular2-flash-messages';

import {AuthServiceService} from './services/auth-service.service';
import {AuthGuard} from './guards/auth.guard';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HomeComponent } from './components/home/home.component';
import { PatientsComponent } from './components/patients/patients.component';
import { SidenavComponent } from './components/partials/sidenav/sidenav.component';
import { ToolbarComponent } from './components/partials/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login.component';
import { MedicalInterviewComponent } from './components/consultation/medical-interview/medical-interview.component';
import { PhysicalExaminationComponent } from './components/consultation/physical-examination/physical-examination.component';
import { ImagingComponent } from './components/imaging/imaging.component';
import { MedicationComponent } from './components/medication/medication.component';
import { LabsComponent } from './components/labs/labs.component';
import { BillingComponent } from './components/billing/billing.component';
import { TraitementPlanComponent } from './components/traitement-plan/traitement-plan.component';
import { ListPatientsComponent } from './components/patients/list-patients/list-patients.component';
import { NewPatientComponent } from './components/patients/new-patient/new-patient.component';
import { ConsultationComponent } from './components/consultation/consultation.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'patients', component: PatientsComponent,
    children: [
      {path: '', redirectTo: 'patients', pathMatch: 'full' },
      {path: 'newPatient', component: NewPatientComponent,
        data: {
          breadcrumb: "Patient/ New Consultation"
        }
      },

      {path: 'listPatients', component: ListPatientsComponent,
        data: {
          breadcrumb: "Patient / list Patients"
        }
      }
    ], canActivate:[AuthGuard]
  },

  {path: 'consulation', component: ConsultationComponent,
    children: [
      {path: '', redirectTo: 'consulation', pathMatch: 'full' },
      {path: 'medicalInterview', component: MedicalInterviewComponent,
        data: {
          breadcrumb: "Consultation / Medical Interview"
        }
      },
      {path: 'physicalExamination', component: PhysicalExaminationComponent,
        data: {
            breadcrumb: "Consultation / Physical Examination"
        }
      },
    ], canActivate:[AuthGuard]
  },

  {path: 'imaging', component: ImagingComponent, canActivate:[AuthGuard]},
  {path: 'medication', component: MedicationComponent, canActivate:[AuthGuard]},
  {path: 'labs', component: LabsComponent, canActivate:[AuthGuard]},
  {path: 'billings', component: BillingComponent, canActivate:[AuthGuard]},
  {path: 'traitementPlan', component: TraitementPlanComponent, canActivate:[AuthGuard]}
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
    BreadcrumbComponent,
    LabsComponent,
    BillingComponent,
    TraitementPlanComponent,
    ListPatientsComponent,
    NewPatientComponent,
    ConsultationComponent
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
    MdIconModule,
    DataTableModule
  ],

  providers: [MdIconRegistry, AuthServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
