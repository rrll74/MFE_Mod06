import Axios from 'axios';
import { EpisodeEntityApi, EpisodeEntityApiResults } from './episode.api-model';
import { gql } from 'graphql-request';
import { graphqlClient } from 'core/graphql';

const url = `${process.env.API_URL}/episode`;

export const getEpisode = async (id: number): Promise<EpisodeEntityApi> => {
  const query = gql`
  query {
    episode(id: ${id}) {
      id
      name
      air_date
      episode
      characters
      url
      created
    }
  }
  `;

  const { episode } = await graphqlClient.request<EpisodeEntityApiResults>(
    query
  );
  return episode;
};
