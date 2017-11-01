import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'

import { EventService } from './events/services/EventService'
import { ToastrService } from './common/toastr.service'

import { EventDetailsComponent } from './events/event-details/event-details.component'

import { CreateEventComponent } from './events/create-event.component'

import { AppRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { enableTracing:true })
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent
    ],
    providers: [
        EventService, 
        ToastrService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}