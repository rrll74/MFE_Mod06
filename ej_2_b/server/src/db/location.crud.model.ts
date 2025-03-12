import Axios from 'axios';
import { createEmptyLocation } from './mock-data/default-data.api';
import { LocationEntityApi, LocationEntityApiEdit } from './models';

const url = `http://localhost:3000/location`;

export const getLocationList = async (): Promise<LocationEntityApi[]> => {
  const response = await Axios.get(url);
  return response.data;
};

export const getLocation = async (id: number): Promise<LocationEntityApi> => {
  const response = await Axios.get(`${url}/${id}`);
  return response.data;
};

export const insertLocation = async (locationEdit: LocationEntityApiEdit) => {
  const newLocation = {
    ...createEmptyLocation(),
    ...locationEdit,
  };
  const response = await Axios.post(url, newLocation);
  return response.data.id;
};

export const updateLocation = async (
  locationEdit: LocationEntityApiEdit
): Promise<boolean> => {
  await Axios.patch(`${url}/${locationEdit.id}`, locationEdit);
  return true;
};

export const deleteLocation = async (id: number): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
