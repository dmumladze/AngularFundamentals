import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { IEvent } from './services/event.model'
import { EventService } from './services/event.service'

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
        em { float:right; color:#e05c65; padding-left:10px }
        .error input { background-color: #e3c3c5 }
`]
})
export class CreateEventComponent implements OnInit {

    isDirty = true

    constructor(private router: Router, private eventService: EventService) {
    }

    ngOnInit() {
    }

    saveEvent(form) {
        this.eventService.saveEvent(form).subscribe(e => {
            this.isDirty = false
            this.router.navigate(['/events'])
        })
    }

    cancel() {
        this.router.navigate(['/events'])
    }

}
