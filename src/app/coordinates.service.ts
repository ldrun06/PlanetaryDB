import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesService {
  constructor() { }
  private messageClickSource = new Subject<string>();
  messageClick$ = this.messageClickSource.asObservable();

  sendMouseClickMessage(message: string) {
    this.messageClickSource.next(message);
  }
}