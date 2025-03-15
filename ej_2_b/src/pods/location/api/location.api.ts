import Axios from 'axios';
import {
  LocationEntityApi,
  LocationEntityApiResults,
} from './location.api-model';
import { gql } from 'graphql-request';
import { graphqlClient } from 'core/graphql';

const url = `${process.env.API_URL}/location`;

export const getLocation = async (id: number): Promise<LocationEntityApi> => {
  const query = gql`
  query {
    location(id: ${id}) {
      id
      name
      type
      dimension
      residents
      url
      created
    }
  }
  `;
  const { location } = await graphqlClient.request<LocationEntityApiResults>(
    query
  );
  return location;
};
