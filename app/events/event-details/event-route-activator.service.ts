import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { Observable } from 'rxjs/Observable'

import { EventService } from '../services/index'

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService:EventService, private router:Router) {        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any { //boolean | Observable<boolean> | Promise<boolean> {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if (!eventExists)
            this.router.navigate(['/404'])

        return eventExists
    }

}