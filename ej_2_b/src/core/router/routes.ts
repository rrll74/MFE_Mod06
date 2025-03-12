import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  showCharacter: string;
  showLocation: string;
  showEpisode: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createCharacter: '/character/create',
  editCharacter: '/character/:id/edit',
  showCharacter: '/character/:id',
  showLocation: '/location/:id',
  showEpisode: '/episode/:id',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes
  extends Omit<
    SwitchRoutes,
    'showCharacter' | 'showLocation' | 'showEpisode' | 'editCharacter'
  > {
  editCharacter: NavigationFunction;
  showCharacter: NavigationFunction;
  showLocation: NavigationFunction;
  showEpisode: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
  showCharacter: (id) => generatePath(switchRoutes.showCharacter, { id }),
  showLocation: (id) => generatePath(switchRoutes.showLocation, { id }),
  showEpisode: (id) => generatePath(switchRoutes.showEpisode, { id }),
};
