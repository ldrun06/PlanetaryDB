import { Directive, HostListener } from '@angular/core';
import { RegionService } from '../region.service';

@Directive({
  selector: '[app-map-mouse-move]',
  standalone: true,
})
export class MapMouseMoveDirective {
  coords = "";
  constructor(private regionService: RegionService) {
  }
  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const x = event.offsetX;
    const y = event.offsetY;
    this.coords = `${x},${y}`;
    this.regionService.sendMouseOverMessage(this.coords);
    //console.log("Sending mouseover message");
  }
  // I want to do a mouseleave message here, too.
}
