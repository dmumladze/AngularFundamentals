import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { IUser } from './user.model'

import { HttpErrorResponse } from '@angular/common/http/src/response';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'

@Injectable()
export class AuthService {

    currentUser: IUser

    constructor(private http: HttpClient) {        
    }
    
    loginUser(userName: string, password: string): Observable<IUser> {
        let loginInfo = { userName: userName.toLocaleLowerCase(), password: password }

        return this.http.post('/api/user/login', loginInfo).do(
            (data: any) => {
                if (data) {
                    this.currentUser = <IUser>data            
                }
            }
        )
    }

    updateProfile(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName  = lastName

        this.http.put(`/api/user/${this.currentUser.id}`, this.currentUser).subscribe()
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    checkAuthentocationStatus() {
        return this.http.get('/api/user/currentIdentity').subscribe(
            (data: any) => {
                if (data) {
                    let user = <IUser>data
                    if (!!user.userName) 
                        this.currentUser = user          
                }
            },
            (e: HttpErrorResponse) => {
                console.log(e)
            }            
        )
    }  
    
    logout(): Observable<any> {
        this.currentUser = undefined
        return this.http.post('/api/user/logout', null)
    }
}