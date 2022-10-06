import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ReactPlayer from 'react-player';
const AudioPlayz = () => {
  const [musicTracks, setMusicTracks] = React.useState({
    src: 'sound.mp3',
    name: 'sound name',
  });
  const handleClickNext = () => {};
  const handleClickPrevious = () => {};
  return (
    <div className="App pt-4">
      <AudioPlayer
        style={{ borderRadius: '1rem' }}
        autoPlay
        src={musicTracks.src}
        onPlay={(e) => console.log('onPlay')}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${musicTracks.name}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
      <ReactPlayer url="<--YOUR BLOB -->" playing />
    </div>
  );
};

export default AudioPlayz;
