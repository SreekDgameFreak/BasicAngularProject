import { Routes } from '@angular/router'

import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { ErrorNotFoundComponent } from './errors/error-not-found.component'
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service'

export const appRoutes:Routes = [
    {
        path : 'events/new' , component: CreateEventComponent
    },
    {
        path : 'events', component: EventsListComponent
    },
    {
        path : 'events/:id', component: EventDetailsComponent , 
        canActivate:[EventRouteActivatorService]
    },
    {
        path : '404', component: ErrorNotFoundComponent
    },
    { 
        path: '', redirectTo: '/events', pathMatch: 'full' 
    }
]