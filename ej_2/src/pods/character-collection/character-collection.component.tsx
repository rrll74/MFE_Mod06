import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components';
import * as classes from './character-collection.styles';
import { FootPagination, FootPaginationContainer } from 'pods/foot-pagination';
import { TextFieldComponent } from 'common/components';

interface Props {
  characterCollection: CharacterEntityVm[];
  pageInfo: FootPagination;
  currentPage: number;
  onCreateCharacter: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    currentPage,
    pageInfo,
    onCreateCharacter,
    onEdit,
    onDelete,
    onPageChange,
    onSearchChange,
  } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add Character
      </Button>

      <TextFieldComponent
        placeholder="Search character..."
        onChange={onSearchChange}
      />
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
      <FootPaginationContainer
        currentPage={currentPage}
        info={pageInfo}
        onPageChange={onPageChange}
      />
    </div>
  );
};
