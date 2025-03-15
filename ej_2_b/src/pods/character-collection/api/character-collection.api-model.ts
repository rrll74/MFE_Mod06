export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentences?: string;
}

export interface PageInfoEntityApi {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterCollectionApi {
  info: PageInfoEntityApi;
  results: CharacterEntityApi[];
}

export interface CharacterCollectionApiResults {
  characters: CharacterCollectionApi;
}

export const createEmptyEntityCharacter = (): CharacterEntityApi => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
  bestSentences: '',
});
