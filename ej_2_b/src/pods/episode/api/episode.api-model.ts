export interface EpisodeEntityApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodeEntityApiResults {
  episode: EpisodeEntityApi;
}

export const createEmptyEntityEpisode = (): EpisodeEntityApi => ({
  id: 0,
  name: '',
  air_date: '',
  episode: '',
  characters: [],
  url: '',
  created: '',
});
