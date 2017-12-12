import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                   <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['/app/events/event-details/upvote.component.css']
})
export class UpvoteComponent {

    @Input() count: number
    @Output() vote = new EventEmitter()

    iconColor: string

    @Input() 
    set voted(value) {
        this.iconColor = value ? 'red' : 'white'
    }

    onClick() {
        this.vote.emit({})
    }
}