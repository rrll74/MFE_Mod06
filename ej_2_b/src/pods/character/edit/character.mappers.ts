import { createEmptyEntityCharacter } from './../../character-collection/api/character-collection.api-model';
import * as apiModel from '../api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  bestSentences: character?.bestSentences,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.CharacterEntityApi => {
  const newCharacter: apiModel.CharacterEntityApi =
    apiModel.createEmptyEntityCharacter();
  return {
    ...newCharacter,
    ...character,
  } as unknown as apiModel.CharacterEntityApi;
};
// ({
//   ...character,
//   id: character.id,
//   name: character.name,
//   status: character.status,
//   species: character.species,
//   type: character.type,
//   gender: character.gender,
//   image: character.image
//     ? character.image
//     : `${process.env.BASE_PICTURES_URL}/thumbnails/new-character.png`,
// }) as unknown as apiModel.CharacterEntityApi;
