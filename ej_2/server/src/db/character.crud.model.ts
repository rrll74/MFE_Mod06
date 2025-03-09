import Axios from 'axios';
import { CharacterEntityApi, CharacterEntityApiEdit } from './models';
import { createEmptyCharacter } from './mock-data/default-data.api';

const url = `http://localhost:3000/character`;

export const getCharacterList = async (): Promise<CharacterEntityApi[]> => {
  const response = await Axios.get(url);
  return response.data;
};

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const response = await Axios.get(`${url}/${id}`);
  console.log('-----------getCharacter--------------');
  return response.data;
};

export const insertCharacter = async (
  characterEdit: CharacterEntityApiEdit
) => {
  const newCharacter = {
    ...createEmptyCharacter(),
    ...characterEdit,
  };
  const response = await Axios.post(url, newCharacter);
  return response.data.id;
};

export const updateCharacter = async (
  characterEdit: CharacterEntityApiEdit
): Promise<boolean> => {
  await Axios.patch(`${url}/${characterEdit.id}`, characterEdit);
  return true;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
