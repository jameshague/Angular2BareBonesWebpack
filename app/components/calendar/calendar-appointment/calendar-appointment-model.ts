import { CustomerDetailsModel } from '../../customer/customer-details/customer-details-model'

export class CalendarAppointmentModel {
    public _startTime: Date
    public _durationMinutes: number
    public _customer: CustomerDetailsModel
}