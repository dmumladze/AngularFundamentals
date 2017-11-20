import { Component, OnInit } from '@angular/core'

import { ToastrService } from '../common/index'
import { EventService, IEvent } from './services/index'

@Component({
    template: `
        <div>
            Upcoming Angular 2 Events List Component 
            <hr>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail #thumb [event]="event" (eventClick)=showToastr($event)></event-thumbnail>
                </div>
            </div>
        </div>    
    `
})
export class EventsListComponent implements OnInit {
    
    events: IEvent[]
    
    constructor(private eventService: EventService, private toastr: ToastrService) {             
    } 
    
    ngOnInit() {
        this.eventService.getEvents().subscribe(events => {
            this.events = events
        })
    }

    showToastr(data) {
        this.toastr.info('Received: ' + data)
    }
}