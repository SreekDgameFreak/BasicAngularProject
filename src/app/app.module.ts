import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventRouteActivatorService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { ErrorNotFoundComponent } from './errors/error-not-found.component';
import { AuthService } from './user/auth.service';

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
    EventListResolverService,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState (createEvent:CreateEventComponent) {
  if(createEvent.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}