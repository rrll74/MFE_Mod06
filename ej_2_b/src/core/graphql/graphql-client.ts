import { GraphQLClient } from 'graphql-request';

const graphqlEndpoint = 'http://localhost:3001/graphql'; // Valor por defecto para desarrollo
export const graphqlClient = new GraphQLClient(graphqlEndpoint);

export async function retryGraphQLRequest<T>(
  query: string,
  variables?: any,
  retries = 10,
  delay = 1000
): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      return await graphqlClient.request<T>(query, variables);
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error);
      if (i === retries - 1) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error('Retry logic failed');
}
