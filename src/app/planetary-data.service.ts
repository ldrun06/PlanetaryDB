import { Injectable } from '@angular/core';
import { PlanetaryData } from './planetary-data';

@Injectable({
  providedIn: 'root'
})
export class PlanetaryDataService {
  url = 'http://localhost:3000/locations';
  constructor() { }

  async getPlanets(): Promise<PlanetaryData[]>{
    const data = await fetch(`${this.url}`);
    return (await data.json()) ?? [];
  }
  async getPlanetbyId(id: number): Promise<PlanetaryData>{
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
