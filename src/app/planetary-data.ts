import { PlanetDetails } from "./planet-details"
export interface PlanetaryData {
    id: number,
    name: string,
    dominantSpecies: string,
    region: string,
    photo: string,
    mapCoordX: number,
    mapCoordY: number,
    planetDetails: PlanetDetails
}
