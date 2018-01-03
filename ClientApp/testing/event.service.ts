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
        const event = this.mockEvents.find(e => e.id === id)
        return Observable.of(event)
    } 
    
    saveEvent(event: IEvent): Observable<IEvent> {   
        const nextId = Math.max.apply(null, this.mockEvents.map(e => e.id))
        event.id = nextId + 1
        this.mockEvents.push(event)
        return Observable.of(event)
    }

    searchSessions(searchTerm: string) {
        return Observable.of(null)
    }
}