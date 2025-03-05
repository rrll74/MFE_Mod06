import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, pageInfo } =
    useCharacterCollection();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    loadCharacterCollection(1);
  }, []);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection(page);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    loadCharacterCollection(value);
    setPage(value);
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      pageInfo={pageInfo}
      currentPage={page}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onPageChange={handlePageChange}
    />
  );
};
