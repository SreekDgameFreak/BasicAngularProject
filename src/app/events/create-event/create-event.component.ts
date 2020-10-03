import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  
  isDirty: boolean = true;

  newEvent;

  constructor(private route:Router, private eventService: EventService) { }

  saveEvent(formValues) {
    console.log(formValues);
    this.isDirty=false;
    this.eventService.saveEvent(formValues);
    this.route.navigate(['/events']);
  }

  ngOnInit(): void {
  }

  cancel() {
    this.route.navigate(['/events']);
  }

}
