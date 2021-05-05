export class Hospital {
       
    constructor(
        public id:number,
        public name:string,
        public waitingList:WaitingList[],
        public processingTime?:number
    ){}
}
export class WaitingList{
    
    constructor(
        public patientCount:number,
        public levelOfPain:number,
        public averageProcessTime:number
    ){}
}
