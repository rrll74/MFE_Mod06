import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';
import { ShowEpisodeComponent } from './show-episode.component';

export const ShowEpisodeContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [location, setLocation] = React.useState<api.EpisodeEntityApi>(
    api.createEmptyEntityEpisode()
  );

  React.useEffect(() => {
    if (id) {
      handleLoadEpisode();
    }
  }, []);

  const handleLoadEpisode = async () => {
    const apiLocation = await api.getEpisode(parseInt(id));
    setLocation(apiLocation);
  };

  const handleBack = () => {
    window.history.back();
  };

  return <ShowEpisodeComponent entity={location} onBack={handleBack} />;
};
