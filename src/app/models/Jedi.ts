import { ValueParserService } from '../services/value-parser/value-parser.service';

export interface JediInterface{
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: [];
    vehicles: string[];
    starships: string[];
    url: string;
}

export class Jedi {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: [];
    vehicles: string[];
    starships: string[];
    url: string;
    id: any;

    constructor(jedi: JediInterface){
        Object.assign(this, jedi);
        this.id = ValueParserService.parseIdFromUrl(jedi.url);
    }
}