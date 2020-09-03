import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Url } from 'url';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  currentPage: string = "/";

  // #8
  @Input() onPageChanged: EventEmitter<string>;
  constructor(
    // #7 service
    private urlService: UrlService
  ) { }

  // #8 service
  ngOnInit(): void {
    this.urlService.urlChanged.subscribe(
      ($event) => {
        console.log($event)
        this.currentPage = $event;
      }
    )
  }

}
