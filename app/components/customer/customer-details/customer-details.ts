import { Component } from '@angular/core'
import { CustomerDetailsModel } from './customer-details-model'

@Component({
    selector: 'customer-details',
    templateUrl: './customer-details.html'
})
export class CustomerDetails {
    public model = new CustomerDetailsModel()
}
