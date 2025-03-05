import React from 'react';
import { EpisodeEntityApi } from '../api';
import { ShowEntityComponent } from 'pods/show-entity';

interface Props {
  entity: EpisodeEntityApi;
  onBack: () => void;
}

export const ShowEpisodeComponent: React.FunctionComponent<Props> = (props) => {
  const { entity, onBack } = props;

  return <ShowEntityComponent entity={entity} onBack={onBack} />;
};
