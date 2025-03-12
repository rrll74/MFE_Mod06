import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../api';
import { ShowLocationComponent } from './show-location.component';

export const ShowLocationContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [location, setLocation] = React.useState<api.LocationEntityApi>(
    api.createEmptyEntityLocation()
  );

  React.useEffect(() => {
    if (id) {
      handleLoadLocation();
    }
  }, []);

  const handleLoadLocation = async () => {
    const apiLocation = await api.getLocation(parseInt(id));
    setLocation(apiLocation);
  };

  const handleBack = () => {
    window.history.back();
  };

  return <ShowLocationComponent entity={location} onBack={handleBack} />;
};
