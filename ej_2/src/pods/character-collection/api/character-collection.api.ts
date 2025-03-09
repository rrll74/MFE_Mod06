import Axios from 'axios';
import AxiosRetry from 'axios-retry';
import { CharacterCollectionApi } from './character-collection.api-model';

const url = `${process.env.API_URL}/character`;

export const getCharacterCollection = async (
  page: number,
  searchTerm: string
): Promise<CharacterCollectionApi> => {
  AxiosRetry(Axios, {
    retries: 3, // Número de reintentos
    retryDelay: (retryCount) => {
      console.log(`Trying petition: # ${retryCount}`);
      return retryCount * 1000;
    },
    // retryCondition: (error) => {
    //   return error.code === 'ECONNRESET';
    // },
  });

  try {
    const { data: results } = await Axios.get(
      `${url}?_limit=${process.env.PAGE_LIMIT}&_page=${page}&name=${searchTerm}`
    );
    return results;
  } catch (error) {
    console.error('Error getting character collection', error);
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  const response = await Axios.delete(`${url}/${id}`);
  return response.status === 204;
};
