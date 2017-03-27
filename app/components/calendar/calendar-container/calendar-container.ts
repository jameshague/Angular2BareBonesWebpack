import { Component, OnInit } from '@angular/core'
import { EventBroadcaster } from '../../../helpers/event-broadcaster'
import { CalendarModelProvider } from '../../../services/calendar-model-provider'

@Component({
    selector: 'calendar-container',
    templateUrl: './calendar-container.html',
    styleUrls: ['./calendar-container.css'],
    providers: [EventBroadcaster ]
})
export class CalendarContainer implements OnInit {
    private _displayedDate: Date

  constructor(private _calendarDayModelProvider: CalendarModelProvider, private _eventBroadcaster: EventBroadcaster) {
    this._displayedDate = new Date()
    alert('calendarcontainer ctor')
  }

  ngOnInit(){
    alert('calendarcontainer on init')
  }
}