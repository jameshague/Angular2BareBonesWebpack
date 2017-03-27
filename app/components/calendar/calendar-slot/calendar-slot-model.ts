import { CalendarAppointmentModel } from '../calendar-appointment/calendar-appointment-model'

export class CalendarSlotModel {
    public name: string
    public appointments: CalendarAppointmentModel[]
}