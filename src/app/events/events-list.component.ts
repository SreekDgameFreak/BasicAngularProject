import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <!-- CSS encapsulation demonstartion-->
      <!-- <div class="well">
        <div>Hello World</div>
      </div> -->
      <hr>
      <!-- #thumbnail is the template reference varialbe that can be used to access eventThumbnail Components public properties and methods in events list component -->
      <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
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

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2077',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1058 DT',
      city: 'London',
      country: 'England'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  // handleEventClicked(data) {
  //   this.noOfClicks=data;
  // }

}
