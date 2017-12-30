import { VoterService } from './voter.service'
import { ISession } from './event.model'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'

describe('VoterService', () => {
    let voterService: VoterService 
    let mockHttp

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'delete'])
        voterService = new VoterService(mockHttp)
    })

    describe('deleteVoter', () => {
        it('should remove voter from array', () => {
            const session = <ISession>{id: 6, voters: ['david', 'toma']}
            mockHttp.delete.and.returnValue(Observable.of(false))

            voterService.deleteVoter(3, session, 'david')

            expect(session.voters.length).toBe(1)
            expect(session.voters[0]).toBe('toma')
        })           
        
        it('should call http with correct route', () => {
            const session = <ISession>{id: 6, voters: ['david', 'toma']}
            mockHttp.delete.and.returnValue(Observable.of(false))

            voterService.deleteVoter(3, session, 'david')    
            
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/david', null)
        })
    })

    describe('addVoter', () => {
        it('should add voter to array', () => {
            const session = <ISession>{id: 6, voters: ['david']}
            mockHttp.post.and.returnValue(Observable.of(false))

            voterService.addVoter(3, session, 'toma')

            expect(session.voters.length).toBe(2)
            expect(session.voters).toContain('toma')
        })           
        
        it('should call http with correct route', () => {
            const session = <ISession>{id: 6, voters: ['david', 'toma']}
            mockHttp.post.and.returnValue(Observable.of(false))

            voterService.addVoter(3, session, 'david')    
            
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/david', null)
        })      
    })
})