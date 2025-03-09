import { Router } from 'express';
import {
  updateCharacter,
  insertCharacter,
  deleteCharacter,
  getCharacter,
  getCharacterList,
  CharacterEntityApi,
  CharacterEntityApiEdit,
} from './../db';

export const characterApi = Router();

characterApi
  .get('/', async (req, res) => {
    const name: string = (req.query?.name as unknown as string) || '';
    const limit: number = parseInt(
      (req.query?._limit as unknown as string) || '20'
    );
    const page: number = parseInt(
      (req.query?._page as unknown as string) || '1'
    );

    const characters = await getCharacterList();
    const filterName =
      name === ''
        ? characters
        : characters.filter(
            (value: CharacterEntityApi) =>
              value.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
          );
    const list = filterName.filter(
      (value, index) => index >= (page - 1) * limit && index <= page * limit - 1
    );
    const info = {
      count: filterName.length,
      pages: Math.ceil(filterName.length / limit),
      prev: '',
      next: '',
    };
    const response = { info: info, results: list };
    res.json(response);
  })
  .get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const character = await getCharacter(id);
    res.send(character);
  })
  .delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const success = await deleteCharacter(id);
    res.send(success);
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
