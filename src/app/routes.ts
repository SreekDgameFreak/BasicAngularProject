import { Routes } from '@angular/router'

import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { ErrorNotFoundComponent } from './errors/error-not-found.component'
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service'
import { EventListResolverService } from './events/event-list-resolver.service'

export const appRoutes:Routes = [
    {
        path : 'events/new' , component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path : 'events', component: EventsListComponent,
        resolve: {events:EventListResolverService}
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
    },
    {
        path: 'user', 
        loadChildren: () => import('./user/user.module').
        then(n=>n.UserModule)
    }
]