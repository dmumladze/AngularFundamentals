import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'

@Component({
    templateUrl: '/app/user/login.component.html',
    styles: [`
        em { float:right; color:#e05c65; padding-left:10px; }
    `]
})
export class LoginComponent {

    constructor(private router:Router, private authService:AuthService) {        
    }

    login(form) {
        this.authService.loginUser(form.userName, form.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}