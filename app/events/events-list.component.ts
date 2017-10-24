import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
        <div>
            Upcoming Angular 2 Events List Component 
            <hr>
            <event-thumbnail [event]="eventObj"></event-thumbnail>
        </div>    
    `
})
export class EventsListComponent {
    eventObj = {
        name: 'ngConf 2025',
        date: '3/1/2025', 
        time: '8:00 AM', 
        price: 599.00,
        location: { 
            address: '123 Main St', 
            city: 'Salt Lake City, UT', 
            country: 'USA' 
        }
    }
}