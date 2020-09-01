import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // #2 event listener
  @Output() pageChange: EventEmitter<string> = new EventEmitter();

  // #1 method
  onLinkClick($event: Event) {
    $event.preventDefault(); // the click event don't navigate other page
    let element = $event.target as HTMLLinkElement;
    let url = element.getAttribute('href');

    console.log(url);

    // #3 start event
    this.pageChange.emit(url)
  }

}
