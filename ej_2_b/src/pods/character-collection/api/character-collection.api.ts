import { bestSentence } from './../../../../../ej_2/src/pods/character-collection/components/character-card.styles';
import Axios from 'axios';
import { gql } from 'graphql-request';
import {
  CharacterCollectionApi,
  CharacterCollectionApiResults,
} from './character-collection.api-model';
import { graphqlClient, retryGraphQLRequest } from 'core/graphql';

const url = `${process.env.API_URL}/character`;

export const getCharacterCollection = async (
  page: number,
  searchTerm: string
): Promise<CharacterCollectionApi> => {
  try {
    const query = gql`
    query {
      characters (page: ${page}, name: "${name}", limit: ${process.env.PAGE_LIMIT}){
        info {
          count
          pages
        }
        results {
          id
          name
          status
          species
          type
          gender
          image
          bestSentences
        }
      }
    }
    `;

    const { characters } =
      await retryGraphQLRequest<CharacterCollectionApiResults>(query);
    return characters;
  } catch (error) {
    console.error('Error getting character collection', error);
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  try {
    const mutation = gql`
    mutation {
      deleteCharacter(id: ${id})
    }
    `;
    const { deleteCharacter } = await graphqlClient.request<{
      deleteCharacter: boolean;
    }>(mutation);
    // const response = await Axios.delete(`${url}/${id}`);
    return deleteCharacter;
  } catch (error) {
    console.error('Error deleting character', error);
  }
};
