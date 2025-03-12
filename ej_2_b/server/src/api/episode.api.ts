import { Router } from 'express';
import {
  deleteEpisode,
  getEpisode,
  getEpisodeList,
  insertEpisode,
  EpisodeEntityApiEdit,
  updateEpisode,
} from './../db';

export const episodeApi = Router();

episodeApi
  .get('/', async (req, res) => {
    const episodes = await getEpisodeList();
    res.json(episodes);
  })

  .delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const success = await deleteEpisode(id);
    res.send(success);
  })
  .get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const episode = await getEpisode(id);
    res.send(episode);
  })
  .post('/', async (req, res) => {
    const episodeEdit: EpisodeEntityApiEdit = req.body;
    const id = await insertEpisode(episodeEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const episodeEdit: EpisodeEntityApiEdit = req.body;
    await updateEpisode(episodeEdit);
    res.sendStatus(200);
  });
