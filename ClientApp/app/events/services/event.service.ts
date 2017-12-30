import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { IEvent, ISession } from './event.model'

@Injectable()
export class EventService {

    idSequence = 999

    constructor(private http: HttpClient) {        
    }

    getEvents(): Observable<IEvent[]> {
        return this.http.get<IEvent[]>('/api/events')
    }

    getEvent(id: number): Observable<IEvent> {
        //return this.http.get<IEvent>('/api/events/', { params: { 'id': id.toString() }})
        return this.http.get<IEvent>('/api/events/' + id.toString())
    } 
    
    saveEvent(event: IEvent): Observable<IEvent> {        
        return this.http.post<IEvent>('/api/events', event)
    }

    searchSessions(searchTerm: string) {
        const term = searchTerm.toLocaleLowerCase()
        return this.http.get<any>('/api/events/sessions/search?term=' + term)
    }
}