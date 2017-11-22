import { Component, OnInit } from '@angular/core'

import { EventService, IEvent } from './services/index'

@Component({
    template: `
        <div>
            Upcoming Angular 2 Events List Component 
            <hr>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail #thumb [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>    
    `
})
export class EventsListComponent implements OnInit {
    
    events: IEvent[]
    
    constructor(private eventService: EventService) {             
    } 
    
    ngOnInit() {
        this.eventService.getEvents().subscribe(events => {
            this.events = events
        })
    }

}