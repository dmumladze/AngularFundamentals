import { 
    Component, 
    Input, 
    OnChanges, 
    SimpleChanges } from '@angular/core'

import { ISession } from '../services/event.model'

@Component({
    selector: 'session-list',
    templateUrl: '/app/events/event-details/session-list.component.html'    
})
export class SessionListComponent implements OnChanges {
    
    @Input() sessions: ISession[]
    @Input() filterBy: string
    @Input() sortBy: string
    
    visibleSession: ISession[] = []

    ngOnChanges(changes: SimpleChanges) {
        if (!this.sessions)
            return

        this.filterSessions()
        this.sortSessions()
    }    

    filterSessions() {
        if (this.filterBy === 'all') {
            this.visibleSession = this.sessions.slice(0)
        } else {
            this.visibleSession = this.sessions.filter(s => {
                return s.level.toLocaleLowerCase() == this.filterBy
            })
        }               
    }

    sortSessions() {
        if (this.sortBy === 'name')
            this.visibleSession.sort(this.sortByName)  
        else 
            this.visibleSession.sort(this.sortByVotes)                  
    }

    private sortByName(s1: ISession, s2: ISession): number {
        if (s1.name > s2.name)
            return 1
        else if (s1.name == s2.name)
            return 0
        else 
            return -1
    }

    private sortByVotes(s1: ISession, s2: ISession): number {
        return s1.voters.length - s2.voters.length
    }

}