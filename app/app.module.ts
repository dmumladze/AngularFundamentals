import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutes } from './routes'
import { NavBarComponent } from './nav/index'
import { ToastrService } from './common/index'
import { Error404Component } from './errors/index'

import { AuthService } from './user/auth.service'

import { 
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator } from './events/index'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        ReactiveFormsModule,       
        RouterModule.forRoot(AppRoutes, { enableTracing:true })
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService, 
        ToastrService,
        EventRouteActivator,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You haven\'t saved this event, do you really want to cancel?')
    
    return true
}