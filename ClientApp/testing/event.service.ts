import { Observable } from 'rxjs/Observable'

import { IEvent, ISession } from '../app/events/index'

import * as events from './events.json'

export class MockEventService {

    mockEvents: IEvent[] 

    constructor() {
        //const events = require('./events.json')
        this.mockEvents = <any>events
    }

    getEvents(): Observable<IEvent[]> {
        return Observable.of(this.mockEvents)
    }

    getEvent(id: number): Observable<IEvent> {
        return Observable.of(this.mockEvents[0])
    } 
    
    saveEvent(event: IEvent): Observable<IEvent> {        
        return Observable.of(event)
    }

    searchSessions(searchTerm: string) {
        return Observable.of(null)
    }
}