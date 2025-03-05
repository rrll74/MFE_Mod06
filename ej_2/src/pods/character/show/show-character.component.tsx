import React from 'react';
import { CharacterEntityApi } from '../api';
import { ShowEntityComponent } from 'pods/show-entity';

interface Props {
  entity: CharacterEntityApi;
  onBack: () => void;
}

export const ShowCharacterComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { entity, onBack } = props;

  return <ShowEntityComponent entity={entity} onBack={onBack} />;
};
