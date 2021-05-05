import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Patient} from "../Model/Patient";
import { PatientService } from '../Service/patient.service';

 enum SeverityLevel {
  minor='minor' ,
  moderate='moderate',
  major='major',
  extreme='extreme',
  extremelycritical='extremelycritical'
}
@Component({
  selector: 'app-patient-selection',
  templateUrl: './patient-selection.component.html',
  styleUrls: ['./patient-selection.component.css']
})
export class PatientSelectionComponent implements OnInit {

  private ilnessSelected:string;
  public selectedSverity:string;
  public sevrerityValues:string[];
  public  patientName: string;

  constructor(private route:ActivatedRoute,private patientService:PatientService) { }

  ngOnInit() {
    this.selectedSverity='';  
    this.patientName='';  
    this.sevrerityValues=Object.keys(SeverityLevel);
    console.log(this.sevrerityValues);
  
    this.ilnessSelected=this.route.snapshot.paramMap.get('name');
    console.log(this.ilnessSelected);
  }
  public onOptionsSelected(event) {
    console.log(event);
    const value = event.target.value;
    this.selectedSverity = value;
    
 }
 addPatient()
 {
   console.log("inside add patient");
   let patient=new Patient(this.patientName);
    console.log(this.patientName);
    this.patientService.addPatient(patient).subscribe(res=>{
      alert(res.toString());
    });
  
 }

}

