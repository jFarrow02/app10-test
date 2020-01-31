import { ValueParserService } from '../services/value-parser/value-parser.service';

export interface FilmInterface {
    id: number;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_data: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    url: string;
}

export class Film {
    id: number | string;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_data: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    url: string;

    constructor (film: FilmInterface){
        Object.assign(this, film);
        this.id = ValueParserService.parseIdFromUrl(film.url);
    }
}