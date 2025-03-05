import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  showCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createCharacter: '/characters/create',
  showCharacter: '/characters/:id',
  editCharacter: '/characters/:id/edit',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes
  extends Omit<SwitchRoutes, 'showCharacter' | 'editCharacter'> {
  showCharacter: NavigationFunction;
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  showCharacter: (id) => generatePath(switchRoutes.showCharacter, { id }),
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
