import express from 'express';
import * as path from 'path';
import jsonServer from 'json-server';
import { characterApi } from './api';

const PORT = 3000;
(async () => {
  const app = express();

  const data = jsonServer.router(
    path.resolve(
      new URL('.', import.meta.url).pathname,
      './db/mock-data/rickandmorty-data.json'
    )
  );
  const middlewares = jsonServer.defaults();

  app.use(express.json());

  app.use(
    '/',
    express.static(
      path.resolve(new URL('.', import.meta.url).pathname, './public')
    )
  );

  app.use('/api', middlewares, data);
  app.use('/api/character', characterApi);

  app.listen(PORT, () => {
    console.log(`Express Server running http://localhost:${PORT}`);
  });
})();
