import { Routes } from '@angular/router'

import { Error404Component } from './errors/index'

import { 
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator } from './events/index'

export const AppRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },  
    { path: '404', component: Error404Component },  
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]