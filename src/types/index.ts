//generics
export interface SwapiResp<R extends unknown[]> {
  count: number;
  next: string | null;
  previous: string | null;
  results: R;
}


//people
export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}


//responses
export type GetPeopleResp = SwapiResp<Person[]>;
