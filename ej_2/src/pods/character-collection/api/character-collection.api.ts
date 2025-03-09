import Axios from 'axios';
import { CharacterCollectionApi } from './character-collection.api-model';
import { FootPagination } from 'pods/foot-pagination';

const url = `${process.env.API_URL}/character`;

export const getCharacterCollection = async (
  page: number,
  searchTerm: string
): Promise<CharacterCollectionApi> => {
  try {
    const { data: all } = await Axios.get(`${url}`);
    const info: FootPagination = {
      count: all.length,
      pages: Math.ceil(all.length / parseInt(process.env.PAGE_LIMIT)),
      next: '',
      prev: '',
    };
    const { data: results } = await Axios.get(
      `${url}/?_limit=${process.env.PAGE_LIMIT}&_page=${page}`
    );
    console.log(results, info);
    return { info: info, results: results };
  } catch (error) {
    console.error('Error getting character collection', error);
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  const response = await Axios.delete(`${url}/${id}`);
  return response.status === 204;
};
