import { Router } from 'express';
import {
  deleteLocation,
  getLocation,
  getLocationList,
  insertLocation,
  LocationEntityApiEdit,
  updateLocation,
} from './../db';

export const locationApi = Router();

locationApi
  .get('/', async (req, res) => {
    const locations = await getLocationList();
    res.json(locations);
  })

  .delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const success = await deleteLocation(id);
    res.send(success);
  })
  .get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const location = await getLocation(id);
    res.send(location);
  })
  .post('/', async (req, res) => {
    const locationEdit: LocationEntityApiEdit = req.body;
    const id = await insertLocation(locationEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const locationEdit: LocationEntityApiEdit = req.body;
    await updateLocation(locationEdit);
    res.sendStatus(200);
  });
