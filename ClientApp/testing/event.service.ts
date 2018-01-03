import { Observable } from 'rxjs/Observable'

import { IEvent, ISession } from '../app/events/index'
import { mockEvents } from './event.data'

export class MockEventService {
    getEvents(): Observable<IEvent[]> {
        return Observable.of(mockEvents)
    }

    getEvent(id: number): Observable<IEvent> {
        return Observable.of(mockEvents[0])
    } 
    
    saveEvent(event: IEvent): Observable<IEvent> {        
        return Observable.of(event)
    }

    searchSessions(searchTerm: string) {
        return Observable.of(null)
    }
}