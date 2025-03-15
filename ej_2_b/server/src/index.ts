import 'regenerator-runtime/runtime';
import express from 'express';
import path from 'path';
import jsonServer from 'json-server';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';
import { characterApi, locationApi, episodeApi } from './api';
import { characterMiddleware } from './json-server/character.middleware';
import { resolvers, typeDefs } from './graphql';
// import { locationMiddleware } from './json-server/location.middleware';
// import { episodeMiddleware } from './json-server/episode.middleware';

const PORT = 3001;

(async () => {
  const app: any = express();
  app.use(express.json());

  const data = jsonServer.router(
    path.resolve(__dirname, './db/mock-data/rickandmorty-data.json')
  );
  const middlewares = jsonServer.defaults();

  const graphsqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await graphsqlServer.start();
  graphsqlServer.applyMiddleware({ app });

  app.use(express.static(path.resolve(__dirname, './public')));
  app.use('/api/character', characterMiddleware, characterApi);
  app.use('/api', middlewares, data);
  // app.use('/api/location', locationMiddleware, locationApi);
  // app.use('/api/episode', episodeMiddleware, episodeApi);

  app.listen(PORT, () => {
    console.log(`Express Server running http://localhost:${PORT}`);
    console.log(
      `GraphQL running http://localhost:${PORT}${graphsqlServer.graphqlPath}`
    );
  });
})();
