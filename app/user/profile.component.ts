import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { AuthService } from './auth.service'

@Component({
    templateUrl: 'app/user/profile.component.html',
    styles: [`
        em { float:right; color:#e05c65; padding-left:10px }
        .error input { background-color: #e3c3c5 }
  `]
})
export class ProfileComponent implements OnInit {

    firstName: FormControl
    lastName:  FormControl
    profileForm: FormGroup    

    constructor(private router:Router, private authService:AuthService) {    
    }

    ngOnInit() {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [
            Validators.required, 
            Validators.pattern('[a-zA-Z].*')])

        this.lastName  = new FormControl(this.authService.currentUser.lastName,  Validators.required)

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName:  this.lastName
        })
    }

    saveProfile(form) {
        if (!this.profileForm.valid)
          return

        this.authService.updateProfile(form.firstName, form.lastName)
        this.router.navigate(['events'])
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched
    }

    cancel() {
        this.router.navigate(['events'])
    }

}