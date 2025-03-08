import Axios from 'axios';
import { EpisodeEntityApi, EpisodeEntityApiEdit } from './models';
import { createEmptyEpisode } from './mock-data/default-data.api';

const url = `http://localhost:3000/episode`;

export const getEpisodeList = async (): Promise<EpisodeEntityApi[]> => {
  const response = await Axios.get(url);
  return response.data;
};

export const getEpisode = async (id: number): Promise<EpisodeEntityApi> => {
  const response = await Axios.get('$(url)/${id}');
  return response.data;
};

export const insertEpisode = async (episodeEdit: EpisodeEntityApiEdit) => {
  const newEpisode = {
    ...createEmptyEpisode(),
    ...episodeEdit,
  };
  const response = await Axios.post(url, newEpisode);
  return response.data.id;
};

export const updateEpisode = async (
  episodeEdit: EpisodeEntityApiEdit
): Promise<boolean> => {
  await Axios.patch(`${url}/${episodeEdit.id}`, episodeEdit);
  return true;
};

export const deleteEpisode = async (id: number): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
