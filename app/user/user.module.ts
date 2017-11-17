import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ProfileComponent } from '../user/profile.component'
import { userRoutes } from '../user/user.routes'

import { LoginComponent } from './login.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
    ]
})
export class UserModule {

}
