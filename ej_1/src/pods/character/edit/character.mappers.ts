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
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.CharacterEntityApi =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
  } as unknown as apiModel.CharacterEntityApi);
