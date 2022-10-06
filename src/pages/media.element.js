import React from 'react';
import Info from '../Containers/steroio/info';
import PlayerSection from '../Containers/steroio/playerSection';
import Title from '../Containers/steroio/title';

const MediaElement = () => {
  return (
    <div>
      <Title />
      <PlayerSection />
      <Info />
    </div>
  );
};

export default MediaElement;
