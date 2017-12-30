import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import {
    FormControl,
    FormGroup,
    Validators } from '@angular/forms'

import { ISession } from '../services/event.model'
import { restrictedWords } from '../shared/index'

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
        em { float:right; color:#e05c65; padding-left:10px; }
        .error input, .error select, .error textarea { background-color:#e3c3c5 }
`]
})
export class CreateSessionComponent implements OnInit {

    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    @Output() saveNewSession   = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()

    constructor() {
    }

    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract})
    }

    saveSession(formValues) {
        const session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        this.saveNewSession.emit(session)
        console.log(session)
    }

    cancel() {
        this.cancelAddSession.emit()
    }

}
