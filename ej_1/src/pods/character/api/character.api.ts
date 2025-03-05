import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';

const url = `${process.env.API_URL}/character`;

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
