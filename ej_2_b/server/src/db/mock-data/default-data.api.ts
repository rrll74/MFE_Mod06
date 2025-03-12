import {
  CharacterEntityApi,
  EpisodeEntityApi,
  LocationEntityApi,
} from '../models';

export const createEmptyCharacter = (): CharacterEntityApi => ({
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
  created: new Date().toUTCString(),
});

export const createEmptyEpisode = (): EpisodeEntityApi => ({
  id: 0,
  name: '',
  air_date: '',
  episode: '',
  characters: [],
  url: '',
  created: new Date().toUTCString(),
});

export const createEmptyLocation = (): LocationEntityApi => ({
  id: 0,
  name: '',
  type: '',
  dimension: '',
  residents: [],
  url: '',
  created: new Date().toUTCString(),
});
