import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';
import { ShowCharacterComponent } from './show-character.component';

export const ShowCharacterContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<api.CharacterEntityApi>(
    api.createEmptyEntityCharacter()
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

  return <ShowCharacterComponent entity={character} onBack={handleBack} />;
};
