import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  currentPage: string = "/";

  // #8
  @Input() onPageChanged: EventEmitter<string>;
  constructor() { }

  // #9
  ngOnInit(): void {
    this.onPageChanged.subscribe(
      ($event) => {
        console.log($event)
        this.currentPage = $event;
      }
    )
  }

}
