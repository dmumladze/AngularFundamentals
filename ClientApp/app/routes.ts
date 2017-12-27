import { Routes } from '@angular/router'

import { Error404Component } from './errors/index'

import { 
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    EventListResolver,
    CreateSessionComponent } from './events/index'

export const AppRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },  
    { path: '404', component: Error404Component },  
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events/sessions/new', component: CreateSessionComponent },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
]