import Axios from 'axios';
import { EpisodeEntityApi } from './episode.api-model';

const url = `${process.env.API_URL}/episode`;

export const getEpisode = async (id: number): Promise<EpisodeEntityApi> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};
