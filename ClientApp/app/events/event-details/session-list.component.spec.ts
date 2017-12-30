import { ISession } from '../services/event.model'
import { SessionListComponent } from './session-list.component'
import { AuthService } from '../../user/auth.service';
import { VoterService } from '../services/voter.service'

describe('SessionListComponent', () => {
    const mockAuthService: AuthService = null
    const mockVoterService: VoterService = null
    let component: SessionListComponent

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService)
    })

    describe('ngOnChanges', ()   => {
        it('should filter sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'sesson 1', level: 'beginner' },
                { name: 'sesson 2', level: 'intermediate' },
                { name: 'sesson 3', level: 'advanced' }
            ]        
            component.filterBy = 'intermediate'
            component.sortBy = 'name'
            component.eventId = 3

            component.ngOnChanges(null)

            expect(component.visibleSession.length).toBe(1)
        })

        it('should sort sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'sesson 3', level: 'intermediate' },
                { name: 'sesson 1', level: 'intermediate' },
                { name: 'sesson 2', level: 'intermediate' } 
            ]        
            component.filterBy = 'intermediate'
            component.sortBy = 'name'
            component.eventId = 3

            component.ngOnChanges(null)

            expect(component.visibleSession[0].name).toBe('sesson 1')
            expect(component.visibleSession[1].name).toBe('sesson 2')
            expect(component.visibleSession[2].name).toBe('sesson 3')
        })        
    })
})