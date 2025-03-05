import Axios from 'axios';
import { CharacterCollectionApi } from './character-collection.api-model';

const url = `${process.env.API_URL}/character`;

export const getCharacterCollection = async (
  page: number
): Promise<CharacterCollectionApi> => {
  const { data } = await Axios.get(`${url}/?page=${page}`);
  return data;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  const response = await Axios.delete(`${url}/${id}`);
  return response.status === 204;
};
