import { Component, OnInit } from '@angular/core'

import { EventService } from './services/EventService'
import { ToastrService } from '../common/toastr.service'

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
    
    events: any[]
    
    constructor(private eventService:EventService, private toastr:ToastrService) {             
    } 
    
    ngOnInit() {
        this.events = this.eventService.getEvents() 
    }

    showToastr(data) {
        this.toastr.info('Received: ' + data)
    }
}