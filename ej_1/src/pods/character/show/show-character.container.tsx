import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';
import { ShowCharacterComponent } from './show-character.component';
import {
  CharacterEntityApi,
  createEmptyEntityCharacter,
} from 'pods/character-collection/api';

export const ShowCharacterContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<CharacterEntityApi>(
    createEmptyEntityCharacter()
  );

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(parseInt(id));
    setCharacter(apiCharacter);
  };

  const handleBack = () => {
    window.history.back();
  };

  return <ShowCharacterComponent character={character} onBack={handleBack} />;
};
