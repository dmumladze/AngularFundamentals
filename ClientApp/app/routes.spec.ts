import { NO_ERRORS_SCHEMA } from '@angular/core'
import { Data, Params } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { TestBed, fakeAsync, async, ComponentFixture, tick } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MockEventService } from '../testing/event.service'

import { AppRoutes } from './routes'
import { NavBarComponent } from './nav/index'
import { Error404Component } from './errors/index'

import { DurationPipe } from './events/shared/index'

import { 
    TOASTR_TOKEN, 
    IToastr, 
    CollapsibleWellComponent, 
    JQ_TOKEN,
    SimpleModalComponent,
    ModalTriggerDirective } from './common/index'

import { AuthService } from './user/auth.service'

import { 
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    VoterService,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    LocationValidator } from './events/index'

describe('AppRoutes', () => {
    let router: Router
    let location: Location
    let fixture: ComponentFixture<EventsAppComponent>
    const toastr: IToastr = null
    const jQuery: Object = {}   

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                RouterTestingModule.withRoutes(AppRoutes)
            ],
            declarations: [ 
                Error404Component,
                EventsAppComponent,
                EventsListComponent,
                EventThumbnailComponent,
                NavBarComponent,
                EventDetailsComponent,
                CreateEventComponent,
                CreateSessionComponent,
                SessionListComponent,
                CollapsibleWellComponent, 
                DurationPipe,
                SimpleModalComponent,
                UpvoteComponent,
                ModalTriggerDirective,
                LocationValidator         
            ],
            providers: [
                { provide: EventService, useClass: MockEventService },
                VoterService,
                EventResolver,
                EventListResolver,                
                { provide: AuthService, useClass: AuthService },
                { provide: TOASTR_TOKEN, useValue: toastr }, 
                { provide: JQ_TOKEN, useValue: jQuery },
                { provide: 'canDeactivateCreateEvent', useValue: () => false } 
            ],
            schemas: []
        })

        router = TestBed.get(Router)
        location = TestBed.get(Location)
        fixture = TestBed.createComponent(EventsAppComponent)

        router.initialNavigation()
    })

    it('navigate to "" redirects to /events', fakeAsync(() => {
        router.navigate([''])
            .then(v => {  
                console.log('/events')              
                expect(location.path()).toBe('/events')
            })
    }))

    it('navigate to "events/new" redirects to /events/new', fakeAsync(() => {
        router.navigate(['events/new'])
            .then(v => {
                console.log('/events/new') 
                expect(location.path()).toBe('/events/new')
            })        
    }))
    
    it('navigate to "events" redirects to /events', fakeAsync(() => {
        router.navigate(['events'])
            .then(v => {
                console.log('/events') 
                expect(location.path()).toBe('/events')
            })     
    }))  
    
    it('navigate to "events/5" redirects to /events/5', fakeAsync(() => {
        router.navigate(['/events/5']) 
            .then(v => {
                console.log('/events/5') 
                expect(location.path()).toBe('/events/5')
            })  
    }))
    
})
