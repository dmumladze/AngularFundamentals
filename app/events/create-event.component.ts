import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { IEvent } from './services/event.model'
import { EventService } from './services/EventService'

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
        em { float:right; color:#e05c65; padding-left:10px }
        .error input { background-color: #e3c3c5 }
`]    
})
export class CreateEventComponent implements OnInit {

    isDirty:boolean = true

    constructor(private router:Router, private eventService:EventService) {        
    }

    ngOnInit() {
    }    

    saveEvent(form) {
        this.eventService.saveEvent(form)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }

}