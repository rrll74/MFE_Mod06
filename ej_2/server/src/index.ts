import express from 'express';
import * as path from 'path';
import jsonServer from 'json-server';
import { characterApi, locationApi, episodeApi } from './api';
import { characterMiddleware } from './json-server/character.middleware';
import { locationMiddleware } from './json-server/location.middleware';
import { episodeMiddleware } from './json-server/episode.middleware';

const PORT = 3001;

(async () => {
  const app = express();

  const data = jsonServer.router(
    path.resolve(__dirname, './db/mock-data/rickandmorty-data.json')
  );
  const middlewares = jsonServer.defaults();

  app.use(express.json());

  app.use(express.static(path.resolve(__dirname, './public')));

  app.use('/api', middlewares, characterMiddleware, data);
  app.use('/api/character', characterMiddleware, characterApi);
  app.use('/api/location', locationMiddleware, locationApi);
  app.use('/api/episode', episodeMiddleware, episodeApi);

  app.listen(PORT, () => {
    console.log(`Express Server running http://localhost:${PORT}`);
  });
})();
