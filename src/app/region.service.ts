import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  constructor() { }
  private messageMouseMoveSource = new Subject<string>();
  messageMouseMove$ = this.messageMouseMoveSource.asObservable();

  sendMouseOverMessage(message: string) {
    this.messageMouseMoveSource.next(message);
  }
}