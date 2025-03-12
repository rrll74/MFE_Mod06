import Axios from 'axios';
import { LocationEntityApi } from './location.api-model';

const url = `${process.env.API_URL}/location`;

export const getLocation = async (id: number): Promise<LocationEntityApi> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};
