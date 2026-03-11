import { Component, inject } from '@angular/core';
import { CoordinatesService } from '../coordinates.service';
import { PlanetaryDataService } from '../planetary-data.service';
import { PlanetaryData } from '../planetary-data';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'map-selection-data',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './map-selection.component.html',
  styleUrl: './map-selection.component.css'
})
export class MapSelectionComponent {
  planetaryDataService: PlanetaryDataService = inject(PlanetaryDataService);
  planets: PlanetaryData[] = [];
  selectedPlanet: PlanetaryData;
  coords = "";
  highlightedRegion = "";
  selectedRegion = "";
  constructor(private coordService: CoordinatesService){
    this.selectedPlanet = {
      id: 0,
      name: "Please select a planet from the map",
      dominantSpecies: "Please select a planet to view a dominant species",
      region: "Please select a planet to view its galactic region",
      photo: "planets/default.jpg",
      mapCoordX: 0,
      mapCoordY: 0,
      planetDetails: {
        domSpeciesPhoto: "",
        popSize: "",
        moons: "",
        terrain: "",
        climate: ""
      }
    }
    this.planetaryDataService.getPlanets().then((planetsParam: PlanetaryData[]) => {
      this.planets = planetsParam;
    });
  }

  ngOnInit() {
    this.coordService.messageClick$.subscribe(message => {
      console.log("coordinates received from click.");
      this.coords = message;
      var x = parseInt(this.coords.split(',')[0]);
      var y = parseInt(this.coords.split(',')[1]);

      this.selectedPlanet = this.getPlanetFromClick(x, y, 5);
    });
  }

  getPlanetFromClick(xArg: number, yArg: number, margin: number): PlanetaryData{
    //console.log("starting 'getPlanetFromClick'");
    const clickResult = this.planets.filter(plnt => Math.abs(xArg - plnt.mapCoordX) <= margin && Math.abs(yArg - plnt.mapCoordY) <= margin);
    if (clickResult.length > 0)
      return clickResult[0];
    else
      return {
        id: 0,
        name: "Please select a planet from the map",
        dominantSpecies: "Please select a planet to view a dominant species",
        region: "Please select a planet to view its galactic region",
        photo: "planets/default.jpg",
        mapCoordX: 0,
        mapCoordY: 0,
        planetDetails: {
          domSpeciesPhoto: "",
          popSize: "",
          moons: "",
          terrain: "",
          climate: ""
        }
      };
  }
}