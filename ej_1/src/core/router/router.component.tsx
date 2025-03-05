import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  CharacterCollectionScene,
  EditCharacterScene,
  ShowCharacterScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route
          path={switchRoutes.createCharacter}
          element={<EditCharacterScene />}
        />
        <Route
          path={switchRoutes.showCharacter}
          element={<ShowCharacterScene />}
        />
        <Route
          path={switchRoutes.editCharacter}
          element={<EditCharacterScene />}
        />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
