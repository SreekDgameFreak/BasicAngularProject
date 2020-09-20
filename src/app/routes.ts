import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventListResolverService
} from './events/index';
import { ErrorNotFoundComponent } from './errors/error-not-found.component';

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