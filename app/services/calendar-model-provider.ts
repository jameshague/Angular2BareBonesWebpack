import { CalendarDayModel } from '../components/calendar/calendar-day/calendar-day-model'
import { CalendarSlotModel } from '../components/calendar/calendar-slot/calendar-slot-model'
import { CalendarAppointmentModel } from '../components/calendar/calendar-appointment/calendar-appointment-model'
import { CustomerDetailsModel } from '../components/customer/customer-details/customer-details-model'

export class CalendarModelProvider {
    public GetCalendarDayModel(calDay: Date): CalendarDayModel {
        return this.CreateCalendarDayModel()
    }

    private customers: CustomerDetailsModel[] = [
        new CustomerDetailsModel().initialise("Claude", "Morton", 15, "BS15 8SH", "07790 237 235"),
        new CustomerDetailsModel().initialise("Carol", "Hawkins", 231, "BS15 4RL", "07776 462 8908"),
        new CustomerDetailsModel().initialise("Frances", "Web", 11, "BS15 9SJ", "07670 597 098"),
        new CustomerDetailsModel().initialise("Elizabeth", "Barber", 23, "BS15 4UA", "07350 345 927"),
        new CustomerDetailsModel().initialise("Scott", "Henderson", 20, "BS15 8EE", "01170 358 605"),
        new CustomerDetailsModel().initialise("Zoe", "Hague", 32, "BS15 1NG", "07906 271 888"),
        new CustomerDetailsModel().initialise("Vicky", "Collins", 57, "BS15 4BU", "07453 237 290"),
        new CustomerDetailsModel().initialise("Oliver", "Walters", 37, "BS16 5QB", "07906 295 087"),
        new CustomerDetailsModel().initialise("Emma", "Henry", 33, "BS16 9SP", "07687 836 015"),
        new CustomerDetailsModel().initialise("Ed", "Carter", 7, "BS16 1JQ", "07946 532 163")
    ]

    private CreateCalendarDayModel(): CalendarDayModel {
        var calendarDayModel = new CalendarDayModel()
        calendarDayModel.day = new Date(2017, 1, 1)
        calendarDayModel.slots = new Array<CalendarSlotModel>(4)
        calendarDayModel.slots.push(this.CreateSlot('Slot 1'))
        calendarDayModel.slots.push(this.CreateSlot('Slot 2'))
        calendarDayModel.slots.push(this.CreateSlot('Slot 3'))
        calendarDayModel.slots.push(this.CreateSlot('Slot 4'))

        return calendarDayModel
    }

    private CreateSlot(slotName: string): CalendarSlotModel {
        var calendarSlot = new CalendarSlotModel()
        calendarSlot.name = slotName
        calendarSlot.appointments = new Array<CalendarAppointmentModel>(6)
        calendarSlot.appointments.push(this.CreateAppointment(new Date(2017, 1, 1, 9, 0), 60))
        calendarSlot.appointments.push(this.CreateAppointment(new Date(2017, 1, 1, 10, 30), 60))
        calendarSlot.appointments.push(this.CreateAppointment(new Date(2017, 1, 1, 11, 30), 30))
        calendarSlot.appointments.push(this.CreateAppointment(new Date(2017, 1, 1, 13, 0), 60))
        calendarSlot.appointments.push(this.CreateAppointment(new Date(2017, 1, 1, 14, 0), 60))
        calendarSlot.appointments.push(this.CreateAppointment(new Date(2017, 1, 1, 15, 0), 30))

        return calendarSlot
    }

    private CreateAppointment(startTime: Date, duration: number): CalendarAppointmentModel {
        var appointment = new CalendarAppointmentModel()
        appointment._startTime = startTime
        appointment._durationMinutes = duration
        appointment._customer = this.customers[this.RandomCustomerIndex()]
        return appointment
    }

    private RandomCustomerIndex(): number {
        return Math.floor((Math.random() * 9))
    }
}