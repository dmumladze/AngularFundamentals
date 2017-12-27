import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'
import { IUser } from './index';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { useAnimation } from '@angular/core/src/animation/dsl';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float:right; color:#e05c65; padding-left:10px; }
    `]
})
export class LoginComponent {

    loginInvalid: boolean

    constructor(private router: Router, private authService: AuthService) {        
    }

    login(form) {
        this.authService.loginUser(form.userName, form.password).subscribe(
            (user: IUser) => {
                console.log(user)
                this.router.navigate(['events'])
            },
            (err: HttpErrorResponse) => {
                this.loginInvalid = true;
                console.error(err.message)                
            }
        )        
    }

    cancel() {
        this.router.navigate(['events'])
    }
}