import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/Common/http";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators'
import { Patient } from "../Model/Patient";



@Injectable({
    providedIn:"root"
})
export class PatientService{
    private patientServiceUrl="http://localhost:16267/api/Patient";

    constructor(private http:HttpClient)    {

    }
    addPatient(patient:Patient){    
        return this.http.post(this.patientServiceUrl,patient);               
    }
}