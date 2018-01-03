import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core'
import { UpvoteComponent } from '../event-details/upvote.component'
import { DurationPipe } from '../shared/duration.pipe'
import { CollapsibleWellComponent } from '../../common/collapsible-well.component'
import { SessionListComponent } from './session-list.component'
import { AuthService } from '../../user/auth.service'
import { VoterService } from '../services/voter.service'
import { ISession } from '../services/event.model'
import { By } from '@angular/platform-browser'

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>
    let component: SessionListComponent
    let element: HTMLElement
    let debugEl: DebugElement

    beforeEach(async() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'David' }            
        }
        const mockVoterService = {
            addVoter: (eventId: number, session: ISession, voterName: string) => {},
            deleteVoter: (eventId: number, session: ISession, voterName: string) => {},
            userHasVoted: (session: ISession, voterName: string) => true
        }

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                DurationPipe,
                UpvoteComponent,
                CollapsibleWellComponent,
                SessionListComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [                
                //NO_ERRORS_SCHEMA <--uncomment to enforce shallow testing
            ]
        })
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent)
        component = fixture.componentInstance
        debugEl = fixture.debugElement
        element = fixture.nativeElement
    })

    describe('initial display', () => {
        it('should have correct session title', () => {
            component.sessions = <ISession[]>[{ 
                id: 1,
                name: 'session 1', 
                level: 'intermediate',
                abstract: 'abstract',
                duration: 1,
                presenter: 'presenter',
                voters: ['david', 'toma']
            }]   
            component.filterBy = 'all'
            component.sortBy = 'name',
            component.eventId = 1

            component.ngOnChanges(null)
            fixture.detectChanges()

            expect(element.querySelector('[well-title]').textContent).toContain('session 1')
            //same as above
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('session 1')
        })
    })
})