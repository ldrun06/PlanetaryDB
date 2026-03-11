import { Directive, HostListener } from '@angular/core';
import { CoordinatesService } from '../coordinates.service';

@Directive({
  selector: '[app-map-click]',
  standalone: true
})
export class MapClickDirective {
  coords = "";
  constructor(private coordService: CoordinatesService) {
  }
  @HostListener('click', ['$event']) onMouseClick(event: MouseEvent) {
    const x = event.offsetX;
    const y = event.offsetY;
    this.coords = `${x},${y}`;
    this.coordService.sendMouseClickMessage(this.coords);
  }
}
