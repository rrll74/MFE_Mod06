export interface EpisodeEntityApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodeEntityApiEdit {
  id: number;
  name: string;
  air_date: string;
}
