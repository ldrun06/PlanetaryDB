import { Component } from '@angular/core';
import { MapClickDirective as MapClickDirective } from '../map-click-directive/map-click.directive';
import { MapMouseMoveDirective } from '../map-mouse-move-directive/map-mouse-move.directive';
import { MapSelectionComponent } from '../map-selection/map-selection.component';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapClickDirective, MapSelectionComponent, MapMouseMoveDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgWidth = 798;
  imgHeight = 698;
  highlightedRegionFileName = "galactic-map.jpg";
  highlightedRegionName = "";
  coords = "";
  highlightedXCoord = Infinity;
  highlightedYCoord = Infinity;
  constructor(private regionService: RegionService){
  }
  ngOnInit(){
    this.regionService.messageMouseMove$.subscribe(message => {
      //console.log("mouse move event received.");
      this.coords = message;
      this.highlightedRegionFileName = this.getHighlightedRegion();
    });
  }

  getHighlightedRegion(){
    this.highlightedXCoord = parseInt(this.coords.split(',')[0]);
    this.highlightedYCoord = parseInt(this.coords.split(',')[1]);
    return this.getRegionFromCoords(this.highlightedXCoord, this.highlightedYCoord);
  }

  getRegionFromCoords(xArg: number, yArg: number): RegionNames{
    // centre: 378,326
    var xDist = xArg - 378;
    var yDist = yArg - 326;
    var radius = Math.sqrt(xDist * xDist + yDist * yDist);
    if (radius < RegionRadii.DeepCore){
      this.highlightedRegionName = "Deep Core";
      return RegionNames.DeepCore;
    }
    else if (radius < RegionRadii.CoreWorlds){
      this.highlightedRegionName = "Core Worlds";
      return RegionNames.CoreWorlds
    }
    else if (radius < RegionRadii.InnerRim){
      this.highlightedRegionName = "Inner Rim";
      return RegionNames.InnerRim;
    }
    else if (radius < RegionRadii.MidRim){
      this.highlightedRegionName = "Mid Rim";
      return RegionNames.MidRim;
    }
    else if (radius < RegionRadii.GalacticRadius){
      this.highlightedRegionName = "Outer Rim";
      return RegionNames.OuterRim;
    }
    else{
      this.highlightedRegionName = "None";
      return RegionNames.NA
    }
  }
}
enum RegionNames{
  NA = "galactic-map.jpg",
  DeepCore = "highlights/galacticMap_DeepCoreHighlighted.jpg",
  CoreWorlds = "highlights/galacticMap_CoreWorldsHighlighted.jpg",
  InnerRim = "highlights/galacticMap_InnerRimHighlighted.jpg",
  MidRim = "highlights/galacticMap_MidRimHighlighted.jpg",
  OuterRim = "highlights/galacticMap_OuterRimHighlighted.jpg"
}
enum RegionRadii{
  GalacticRadius = 399,
  DeepCore = 27,
  CoreWorlds = 73,
  InnerRim = 134,
  MidRim = 235
}