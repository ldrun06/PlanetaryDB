import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PlanetaryDataService } from '../planetary-data.service';
import { PlanetDetails } from '../planet-details';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent {
  planetaryDataService: PlanetaryDataService = inject(PlanetaryDataService);
  route: ActivatedRoute = inject(ActivatedRoute);
  planetDetails: PlanetDetails;
  name = "";
  dominantSpecies = "";
  constructor() {
    const planetID = parseInt(this.route.snapshot.params['id'], 10);
    this.planetDetails = {
      domSpeciesPhoto: "species/default.jpg",
      popSize: "Please select a world on the home page.",
      moons: "Please select a world on the home page.",
      terrain: "Please select a world on the home page.",
      climate: "Please select a world on the home page."
    }
    this.planetaryDataService.getPlanetbyId(planetID).then((p) => {
      this.name = p?.name;
      this.dominantSpecies = p?.dominantSpecies;
      this.planetDetails = p?.planetDetails;
    });
  }
}