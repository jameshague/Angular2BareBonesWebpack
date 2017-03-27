import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { Home } from './components/home/home'
import { CalendarDay } from './components/calendar/calendar-day/calendar-day'
import { AppointmentSummary } from './components/calendar/appointment-summary/appointment-summary'
import { CustomerDetails } from './components/customer/customer-details/customer-details'
import { PetDetails } from './components/customer/pet-details/pet-details'
import { CalendarContainer } from './components/calendar/calendar-container/calendar-container'

import appRoutes from './routes'

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [Home, CalendarDay, CustomerDetails, PetDetails, AppointmentSummary, CalendarContainer, AppointmentSummary],
  bootstrap: [Home]
})
export class AppModule { }

//declarations
//

//imports
//