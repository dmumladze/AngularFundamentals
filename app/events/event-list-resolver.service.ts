import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { Observable } from 'rxjs/Observable'

import { EventService } from '../events/services/index'

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService:EventService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.eventService.getEvents().map(events => events)
    }

}