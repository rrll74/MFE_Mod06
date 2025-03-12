import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { FootPagination } from 'pods/foot-pagination';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [pageInfo, setPageInfo] = React.useState<FootPagination>();

  const loadCharacterCollection = async (page: number, searchTerm: string) => {
    const result = await getCharacterCollection(page, searchTerm);
    setCharacterCollection(mapToCollection(result?.results, mapFromApiToVm));
    setPageInfo(result?.info);
  };

  return {
    characterCollection: characterCollection,
    pageInfo: pageInfo,
    loadCharacterCollection: loadCharacterCollection,
  };
};
