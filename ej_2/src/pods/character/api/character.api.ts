import Axios from 'axios';
import { CharacterEntityApi } from './character.api-model';

const url = `${process.env.API_URL}/character`;

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};

export const saveCharacter = async (
  character: CharacterEntityApi
): Promise<boolean> => {
  const response = await Axios.patch(`${url}/${character.id}`, character);
  return response.data;
};
