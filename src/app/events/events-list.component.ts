import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

declare let toastr;

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <!-- CSS encapsulation demonstartion-->
      <!-- <div class="well">
        <div>Hello World</div>
      </div> -->
      <hr />
      <!-- #thumbnail is the template reference varialbe that can be used to access eventThumbnail Components public properties and methods in events list component -->
      <div class="row">
        <div *ngFor="let event  of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)"  #thumbnail [event]="event"></event-thumbnail>
        <div>
      </div>
      <!-- Below is used to get information from the child  -->
      <!-- <event-thumbnail (eventClick)="handleEventClicked($event)"
      [event]="event1"></event-thumbnail> -->
      <!-- {{noOfClicks}} -->
      
      <!-- Using template reference variable #thumbnail -->
      <!-- <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log foo for me</button>
      <h3>{{thumbnail.someProperty}}</h3> -->
    </div>
  `,
  styles: [
  ]
})
export class EventsListComponent implements OnInit {

  // noOfClicks: number;
  events:IEvent[];
  constructor(private eventService: EventService, 
    private toastr: ToastrService,
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
   this.events = this.route.snapshot.data['events'];
  }

  // handleEventClicked(data) {
  //   this.noOfClicks=data;
  // }

  handleThumbnailClick(eventName) {
    toastr.success(eventName);
  }

}
