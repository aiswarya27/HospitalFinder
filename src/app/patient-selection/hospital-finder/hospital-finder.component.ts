import { Component, OnInit,OnDestroy, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { HospitalListService } from '../../Service/hospitals-list.service';
import { Hospital } from '../../Model/Hospital';



@Component({
  selector: 'app-hospital-finder',
  templateUrl: './hospital-finder.component.html',
  styleUrls: ['./hospital-finder.component.css']
})
export class HospitalFinderComponent implements OnInit,OnDestroy,OnChanges  {

  private hospitalList: Hospital[];
  private ErrorMessage:any;
  serviceSubscription: Subscription;
  private selectedIllness:string;
  public hospitalsWithProcessingTime:Hospital[];

  @Input()
  selectedSeverity:number;
  

  constructor(private hospitalService:HospitalListService) { 

  }

  ngOnInit() {
    this.serviceSubscription=this.hospitalService.getHospitalList().subscribe({
      next:hospitalList=> {
        this.hospitalList=hospitalList; 
        this.filterHospitalsBaseonSeverity();       
    },
      error:err=>this.ErrorMessage=err
    });
    
    
  }
  ngOnDestroy(){
    this.serviceSubscription.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedSeverity && changes.selectedSeverity.currentValue&&this.hospitalList) {
      console.log(changes.selectedSeverity.currentValue);
      this.filterHospitalsBaseonSeverity();
    }
  }
  filterHospitalsBaseonSeverity(){
          
    let filtererdHospBasedonSeverity=this.hospitalList.map(hospital=>
      {
       return { 
              id: hospital.id,
              name: hospital.name,
              waitingList:hospital.waitingList.filter(waitingList=>waitingList.levelOfPain==this.selectedSeverity)
        }
      });

      this.hospitalsWithProcessingTime=filtererdHospBasedonSeverity.map(hospital=>{
        return { 
          id: hospital.id,
          name: hospital.name,
          waitingList:hospital.waitingList.filter(waitingList=>waitingList.levelOfPain==this.selectedSeverity)
          ,procssingTime:hospital.waitingList.map(time=>time.patientCount*time.averageProcessTime)[0]
        }
      }).sort((a,b)=>(a.procssingTime<b.procssingTime?-1:1));
      
  }
}
