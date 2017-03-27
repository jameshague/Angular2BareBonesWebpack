
import { Component } from '@angular/core'
import { PetDetailsModel, RAG } from './pet-details-model'

@Component({
    selector: 'pet-details',
    templateUrl: './pet-details.html',
    styleUrls: ['./pet-details.css']
})
export class PetDetails {
    public model = new PetDetailsModel()
    public rag = RAG
    constructor() {
        this.model.temperament = RAG.green

        // http://dogtime.com/dog-breeds/profiles
    }

}
