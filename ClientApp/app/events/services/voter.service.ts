import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { ISession } from './event.model'

@Injectable()
export class VoterService {

    constructor(private http: HttpClient) {       
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName)

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url, null).subscribe(
            null, 
            err => console.error(err))            
    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(v => v !== voterName)

        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.delete(url, null).subscribe(
            null, 
            err => console.error(err))
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(v => v === voterName)
    }

}