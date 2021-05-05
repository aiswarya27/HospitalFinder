import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/Common/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators'
import {Illness} from "../Model/Illness";



@Injectable({
    providedIn:"root"
})
export class IllnessListService{
    private illnessListUrl="http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses";

    constructor(private http:HttpClient)    {

    }
    getIllnessList():Observable<Illness[]>{
    
        return this.http.get(this.illnessListUrl).pipe(map((illnes:any)=>
        {
            const illnesArray: Array<Illness>=illnes._embedded.illnesses;             
            return  illnesArray.map((item:any)=> new Illness(item.illness.id,item.illness.name)) 
        }
    )
    );
       
        
    }
}