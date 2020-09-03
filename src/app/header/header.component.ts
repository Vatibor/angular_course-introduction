import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // #4 service: call method
  ngOnInit(): void {
    this.urlService.pushUrl(this.currentUrl);
  }

  // #2 event listener
  @Output() pageChange: EventEmitter<string> = new EventEmitter();
  currentUrl: string = "/";

  // #2 service
  public constructor(private urlService: UrlService) {

  }
  // #1 method
  onLinkClick($event: Event) {
    $event.preventDefault(); // the click event don't navigate other page
    let element = $event.target as HTMLLinkElement;
    this.currentUrl = element.getAttribute('href');

    this.urlService.pushUrl(this.currentUrl);
  }

}
