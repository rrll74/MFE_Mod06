import { Character, CharacterEdit } from './models';
import { createEmptyCharacter } from './mock-data/default-character.api';
import Axios from 'axios';

const url = `${process.env.LOCAL_API_URL}/character`;

export const getCharacterList = async (): Promise<Character[]> => {
  const response = await Axios.get(url);
  return response.data;
};

export const getCharacter = async (id: number): Promise<Character> => {
  const response = await Axios.get('$(url)/${id}');
  return response.data;
};

export const insertCharacter = async (characterEdit: CharacterEdit) => {
  const newCharacter = {
    ...createEmptyCharacter(),
    ...characterEdit,
  };
  const response = await Axios.post(url, newCharacter);
  return response.data.id;
};

export const updateCharacter = async (
  characterEdit: CharacterEdit
): Promise<boolean> => {
  await Axios.patch(`${url}/${characterEdit.id}`, characterEdit);
  return true;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
