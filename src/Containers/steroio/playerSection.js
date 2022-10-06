import React from 'react';
import Channels from './controls/channels';
import StereoPanner from './controls/stereoPanner';
import AudioPlayer from './AudioPlayer';

const PlayerSection = () => {
  return (
    <div className="flex flex-col w-2/4 mx-auto">
      <div className=" border-b pb-6">
        <AudioPlayer />
      </div>
      <StereoPanner />
      <Channels />
    </div>
  );
};

export default PlayerSection;
