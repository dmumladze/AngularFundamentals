import { Component, Input, Output, EventEmitter } from '@angular/core'

import { IEvent } from './services/index'

@Component({
    selector: 'event-thumbnail',
    templateUrl: '/app/events/event-thumbnail.component.html',
    styles: [`
        .thumbnail {min-height:210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
        .green {color:#003300 !important;}
        .bold {font-weight: bold;}
    `]
})
export class EventThumbnailComponent {
    @Input()  event: IEvent
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        this.eventClick.emit(this.event.name)
    }

    logFoo() {
        console.log('Foo')
    }
}