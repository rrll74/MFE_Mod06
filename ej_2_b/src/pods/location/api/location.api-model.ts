export interface LocationEntityApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationEntityApiResults {
  location: LocationEntityApi;
}

export const createEmptyEntityLocation = (): LocationEntityApi => ({
  id: 0,
  name: '',
  type: '',
  dimension: '',
  residents: [],
  url: '',
  created: '',
});
