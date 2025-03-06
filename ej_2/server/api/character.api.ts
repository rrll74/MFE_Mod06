import { Router } from 'express';

export const characterApi = Router();

characterApi.get('/', req, res) => {
  const characters = await getCharacters();
  res.json(characters);
}
