import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HospitalFinderComponent } from './patient-selection/hospital-finder/hospital-finder.component';
import { IllnessListComponent } from './illness-list/illness-list.component';
import { HttpClientModule } from '@angular/Common/http';
import { PatientSelectionComponent } from './patient-selection/patient-selection.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HospitalFinderComponent,
    IllnessListComponent,
    PatientSelectionComponent
  ],
  imports: [
    FormsModule,   
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

