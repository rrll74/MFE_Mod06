import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type ObjectUrl {
    name: String
    url: String
  }
  type Character {
    id: ID!
    name: String!
    status: String!
    species: String
    type: String
    gender: String
    origin: ObjectUrl
    location: ObjectUrl
    image: String
    episode: [String]
    url: String
    created: String
    bestSentences: String
  }

  type Location {
    id: ID!
    name: String!
    type: String
    dimension: String
    residents: [String]
    url: String
    created: String
  }

  type Episode {
    id: ID!
    name: String!
    air_date: String
    episode: String
    characters: [String]
    url: String
    created: String
  }

  type InfoPage {
    count: Int
    pages: Int
    prev: String
    next: String
  }

  type CharacterListResponse {
    info: InfoPage
    results: [Character!]!
  }

  type Query {
    characters(name: String, page: Int, limit: Int): CharacterListResponse
    character(id: ID!): Character!
    location(id: ID!): Location!
    episode(id: ID!): Episode!
  }

  input CharacterInput {
    id: ID
    name: String!
    status: String!
    species: String
    type: String
    gender: String
    bestSentences: String
  }

  input LocationInput {
    id: ID!
    name: String!
    type: String
    dimension: String
  }

  input EpisodeInput {
    id: ID!
    name: String!
    air_date: String
  }

  type Mutation {
    saveCharacter(character: CharacterInput!): Boolean
    deleteCharacter(id: ID): Boolean
  }
`;
