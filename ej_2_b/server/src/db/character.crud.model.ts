import Axios from 'axios';
import { CharacterEntityApi, CharacterEntityApiEdit } from './models';
import { createEmptyCharacter } from './mock-data/default-data.api';

const url = `http://localhost:3000/character`;

export const getCharacterList = async (
  name: string = '',
  page: number = 1,
  limit: number = 20
): Promise<{
  info: { count: number; pages: number; prev: string; next: string };
  results: CharacterEntityApi[];
}> => {
  const query = await Axios.get(url);

  //const characters = await getCharacterList();
  const filterName =
    name === ''
      ? query.data
      : query.data.filter(
          (value: CharacterEntityApi) =>
            value.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
        );
  const list = filterName.filter(
    (value, index) => index >= (page - 1) * limit && index <= page * limit - 1
  );
  const info = {
    count: filterName.length,
    pages: Math.ceil(filterName.length / limit),
    prev: '',
    next: '',
  };

  const response = { info: info, results: list };
  return response;
};

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const response = await Axios.get(`${url}/${id}`);
  return response.data;
};

export const insertCharacter = async (
  characterEdit: CharacterEntityApiEdit
): Promise<boolean> => {
  const newCharacter: CharacterEntityApi = {
    ...createEmptyCharacter(),
    ...characterEdit,
  };
  newCharacter.id = 0;
  try {
    await Axios.post(`${url}/`, newCharacter);
  } catch (error) {
    console.log('Error guardando personaje', error);
  }
  return true;
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
