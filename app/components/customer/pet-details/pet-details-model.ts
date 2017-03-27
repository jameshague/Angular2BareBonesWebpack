
export class PetDetailsModel {
    public petName: string
    public breed: string
    public temperament: RAG
    public generalNotes: string
    public historicServiceType: string // this should link to a service type defined by the BO    
    public serviceNotes: string
    public medicalNotes: string
}

export enum RAG {
    red,
    amber,
    green
}