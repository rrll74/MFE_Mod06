import React from 'react';
import { LocationEntityApi } from '../api';
import { ShowEntityComponent } from 'pods/show-entity';

interface Props {
  entity: LocationEntityApi;
  onBack: () => void;
}

export const ShowLocationComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { entity, onBack } = props;

  return <ShowEntityComponent entity={entity} onBack={onBack} />;
};
