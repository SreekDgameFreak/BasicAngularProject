import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import{ appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorNotFoundComponent } from './errors/error-not-found.component';
import { EventListResolverService } from './events/event-list-resolver.service'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorNotFoundComponent
  ],
  
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent' , 
      useValue: checkDirtyState
    },
    EventListResolverService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState (createEvent:CreateEventComponent) {
  if(createEvent.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}