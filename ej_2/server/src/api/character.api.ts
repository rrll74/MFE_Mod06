import { Router } from 'express';
import {
  updateCharacter,
  insertCharacter,
  deleteCharacter,
  getCharacter,
  getCharacterList,
  CharacterEntityApiEdit,
} from './../db';

export const characterApi = Router();

characterApi
  .get('/', async (req, res) => {
    const characters = await getCharacterList();
    const list = characters.filter((value) => value.id < 21);
    console.log('lista de personajes');
    const info = {
      count: characters.length,
      pages: Math.ceil(characters.length / 20),
      previous: '',
      next: '',
    };
    console.log(list);
    res.json({ info: info, results: list });
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
    const characterEdit: CharacterEntityApiEdit = req.body;
    const id = await insertCharacter(characterEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const characterEdit: CharacterEntityApiEdit = req.body;
    await updateCharacter(characterEdit);
    res.sendStatus(200);
  });
