import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'upvote-tracker',
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
    styleUrls: ['./upvote.component.css']
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