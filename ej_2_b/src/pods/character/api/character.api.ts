import { bestSentence } from './../../../../../ej_2/src/pods/character-collection/components/character-card.styles';
import Axios, { AxiosResponse } from 'axios';
import {
  CharacterEntityApi,
  CharacterEntityApiResults,
} from './character.api-model';
import { gql } from 'graphql-request';
import { graphqlClient, retryGraphQLRequest } from 'core/graphql';

const url = `${process.env.API_URL}/character`;

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const query = gql`
  query {
    character(id: ${id}) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        url
      }
      location {
        name
        url
      }
      image
      episode
      url
      created
      bestSentences
    }
  }
  `;

  const { character } = await graphqlClient.request<CharacterEntityApiResults>(
    query
  );
  return character;
};

export const saveCharacter = async (
  character: CharacterEntityApi
): Promise<boolean> => {
  const mutation = gql`
  mutation {
    saveCharacter(
      character: {
        id: ${character.id},
        name: "${character.name}",
        status: "${character.status}",
        species: "${character.species}",
        type: "${character.type}",
        gender: "${character.gender}",
        bestSentences: "${character.bestSentences}"
      }
    )
  }
  `;
  const { saveCharacter } = await graphqlClient.request<{
    saveCharacter: boolean;
  }>(mutation);
  return saveCharacter;
};
