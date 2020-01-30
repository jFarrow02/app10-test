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

    constructor (film: FilmInterface){
        Object.assign(this, film);
        let id = film.url.match(/\/[0-9]\//)[0];
        id = id.substring(1, id.length -1);
        this.id = Number.parseInt(id);
    }
}