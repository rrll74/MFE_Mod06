import {
  updateCharacter,
  insertCharacter,
  deleteCharacter,
  getCharacter,
  getCharacterList,
  CharacterEdit,
} from './../db';
import { Router } from 'express';

export const characterApi = Router();

characterApi
  .get('/', async (req, res) => {
    const characters = await getCharacterList();
    res.json(characters);
  })

  .delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const success = await deleteCharacter(id);
    res.send(success);
  })
  .get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const character = await getCharacter(id);
    res.send(character);
  })
  .post('/', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    const id = await insertCharacter(characterEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    await updateCharacter(characterEdit);
    res.sendStatus(200);
  });
