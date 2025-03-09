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
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    loadCharacterCollection(page, searchTerm);
    return () => {
      loadCharacterCollection(page, searchTerm);
    };
  }, [searchTerm]);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection(page, searchTerm);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    loadCharacterCollection(value, searchTerm);
    setPage(value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
      onSearchChange={handleSearch}
    />
  );
};
