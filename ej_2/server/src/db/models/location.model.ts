export interface LocationEntityApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationEntityApiEdit {
  id: number;
  name: string;
  type: string;
  dimension: string;
}
