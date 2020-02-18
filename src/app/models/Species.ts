export interface SpeciesInterface{
    average_height: string;
    average_lifespan: string;
    classification: string;
    designation: string;
    eye_colors: string;
    hair_colors: string;
    homeworld: string;
    language: string;
    name: string;
    skin_colors: string;
}

export class Species {
    average_height: number;
    average_lifespan: number;
    classification: string;
    designation: string;
    eye_colors: string;
    hair_colors: string;
    homeworld: string;
    language: string;
    name: string;
    skin_colors: string;

    constructor(species: any){
        const {
            designation,
            eye_colors,
            hair_colors,
            homeworld,
            language,
            name,
            skin_colors
        } = species;

        const average_height = Number.parseInt(species.average_height);
        const average_lifespan = Number.parseInt(species.average_lifespan);

        const temp = {
            designation,
            eye_colors,
            hair_colors,
            homeworld,
            language,
            name,
            skin_colors,
            average_height,
            average_lifespan,
        };

        Object.assign(this, temp);
    }
}