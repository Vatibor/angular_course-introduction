import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // #6
  @Output() pageChanged: EventEmitter<string> =new EventEmitter();

  // #5
  onPageChange($event) {
    console.log($event)
    this.pageChanged.emit($event);
  }
}
