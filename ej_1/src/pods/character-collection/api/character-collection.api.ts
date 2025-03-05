import Axios from 'axios';
import { CharacterCollectionApi } from './character-collection.api-model';
import debounce from 'lodash.debounce';

const url = `${process.env.API_URL}/character`;

export const getCharacterCollection = async (
  page: number,
  searchTerm: string
): Promise<CharacterCollectionApi> => {
  try {
    const { data } = await Axios.get(`${url}/?page=${page}&name=${searchTerm}`);
    return data;
  } catch (error) {
    console.error('Error getting character collection', error);
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  const response = await Axios.delete(`${url}/${id}`);
  return response.status === 204;
};
