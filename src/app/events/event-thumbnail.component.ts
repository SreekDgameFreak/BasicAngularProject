import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .green { color: #003300 !important; }
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 5px;  }
    .well div { color: #bbb; }
    `
  ]
})
export class EventThumbnailComponent implements OnInit {
  
  //Used to pass information from Parent to child
  @Input() event: any;
  //Used to pass information to Parent from Child
  // @Output() eventClick = new EventEmitter();
  // clickedMe: number = 0;

  //template reference variable usage
  // someProperty: any = "some value";

  constructor() { }

  ngOnInit(): void {
  }

  // For sending data to parent component via @Output
  // handleClickMe() {
  // this.clickedMe++;
  //   this.eventClick.emit(this.clickedMe);
  // }

  // //template reference variable usage
  // logFoo() {
  //   console.log('foo');
  // }

  getStartTimeClass() {
    
    // Return object with classes
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart}
    
    // Return string of space-separated classes
    // if(this.event && this.event.time === '8:00 am')
    //   return "green bold";
    // return "";
    
    // Return array of strings withe required classes
    if(this.event && this.event.time === '8:00 am')
      return ['green','bold'];
    return [];
  }

}
