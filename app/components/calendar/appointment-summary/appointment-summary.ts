import { Component, Injectable } from '@angular/core'
import { EventBroadcaster } from '../../../helpers/event-broadcaster'


@Component({
    selector: 'appointment-summary',
    templateUrl: './appointment-summary.html',
    styleUrls: ['./appointment-summary.css']
})
@Injectable()
export class AppointmentSummary {
    constructor(private _eventBroadcaster: EventBroadcaster) { }
}