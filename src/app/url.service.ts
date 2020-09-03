import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  // #5 service: create event emitter
  url: string = "/";
  urlChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  // #3 service: create method
  pushUrl(url: string) {
    this.url = url;
    this.urlChanged.emit(this.url);
  }
}
