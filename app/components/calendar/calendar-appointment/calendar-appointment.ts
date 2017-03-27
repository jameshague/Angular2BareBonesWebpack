import { Component, Injectable, OnDestroy  } from '@angular/core'
import { EventBroadcaster } from '../../../helpers/event-broadcaster'

@Component({
    selector: 'calendar',
    templateUrl: './calendar-appointment.html',
    styleUrls: ['./calendar-appointment.css']
})
@Injectable()
export class CalendarAppointment implements OnDestroy {
    constructor(private _eventBroadcaster: EventBroadcaster) { }

    ngOnDestroy(){
        // unsubscribe event broadcaster
    }
}