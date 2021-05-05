import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/Common/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators'
import {Hospital,WaitingList} from "../Model/Hospital";



@Injectable({
    providedIn:"root"
})
export class HospitalListService{
    private hospitalListUrl="http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals";

    constructor(private http:HttpClient)    {

    }
    getHospitalList():Observable<Hospital[]>{
    
        return this.http.get<Hospital[]>(this.hospitalListUrl).pipe(map((data:any)=> {
            const hospitalsArray: Array<Hospital>=data._embedded.hospitals;                         
            return  hospitalsArray.map((item:any)=> new Hospital(item.id,item.name,
                item.waitingList.map((item:WaitingList)=>new WaitingList(item.patientCount,item.levelOfPain,item.averageProcessTime)))) 
        }
       
    ));
    }
}

    