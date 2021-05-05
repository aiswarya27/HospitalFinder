import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IllnessListComponent } from './illness-list/illness-list.component';
import { PatientSelectionComponent } from './patient-selection/patient-selection.component';
import { HospitalFinderComponent } from './patient-selection/hospital-finder/hospital-finder.component';

const routes: Routes = [
  { path: '', redirectTo: '/illness', pathMatch: 'full' },
  { path: 'hospital', component: HospitalFinderComponent },
  { path: 'illness', component: IllnessListComponent },
  { path: 'illness/:name', component: PatientSelectionComponent },
  
  {
    path: '**',
    redirectTo: '/illness',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
  
 }
