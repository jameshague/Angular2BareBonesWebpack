import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs/Subscription'

export class EventBroadcaster {

  private _eventSubjects: { [key: string]: BehaviorSubject<any> } = {};

  public subscribe(evtType: eventType, callback: (value: any) => void): Subscription {
    if (!this._eventSubjects.hasOwnProperty(eventType[evtType])) {
      this._eventSubjects[evtType] = new BehaviorSubject<any>(null)
    }

    return this._eventSubjects[evtType].subscribe(callback)
  }

  public triggerEvent(evt: eventType, eventData: any) {
    if (this._eventSubjects.hasOwnProperty(eventType[evt])) {
      this._eventSubjects[evt].next(eventData)
    }
  }
}

export enum eventType {
  SelectedDate,
  SelectedAppointment
}
