import { Component } from '@angular/core'
import { CalendarSlot } from '../calendar-slot/calendar-slot'
import { AppointmentSummary } from '../appointment-summary/appointment-summary'
import { EventBroadcaster } from '../../../helpers/event-broadcaster'
import { CalendarDayModel } from './calendar-day-model'

@Component({
    selector: 'calendar-day',
    templateUrl: './calendar-day.html',
    styleUrls: ['./calendar-day.css']
})
export class CalendarDay {
    public appointmentSummary: AppointmentSummary
    public setModel(calModel: CalendarDayModel) {
    }
}