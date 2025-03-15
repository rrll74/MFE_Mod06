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

export interface CharacterEntityApiResults {
  character: CharacterEntityApi;
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
  image: `${process.env.BASE_PICTURES_URL}/thumbnails/new-character.png`,
  episode: [],
  url: '',
  created: '',
  bestSentences: '',
});
