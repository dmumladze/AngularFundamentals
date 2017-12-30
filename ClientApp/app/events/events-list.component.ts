import { Component, OnInit } from '@angular/core'

import { EventService, IEvent } from './services/index'
import { ActivatedRoute } from '@angular/router';

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

    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((e: any) => {
            this.events = e.events;
        })
    }

}
