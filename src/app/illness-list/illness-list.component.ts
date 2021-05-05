import { Component, OnInit, OnDestroy } from '@angular/core';
import { Illness } from '../Model/Illness';
import { IllnessListService } from '../Service/Illness.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'illness-list',
  templateUrl: './illness-list.component.html',
  styleUrls: ['./illness-list.component.css']
})
export class IllnessListComponent implements OnInit,OnDestroy {

  private illnessList: Illness[];
  private ErrorMessage:any;
  serviceSubscription: Subscription;
  private selectedIllness:string;
  constructor(private illnessService:IllnessListService) { 

  }

  ngOnInit() {
    this.serviceSubscription=this.illnessService.getIllnessList().subscribe({
      next:illnessList=> {
        this.illnessList=illnessList;     
    },
      error:err=>this.ErrorMessage=err
    });
    
  }
  illnessSelected(illnesSelected:string)
  {
    //console.log(illnesSelected);
    this.selectedIllness=illnesSelected;
  }
  ngOnDestroy(){
    this.serviceSubscription.unsubscribe();
  }


}
