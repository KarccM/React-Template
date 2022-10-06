import React from 'react';

const Channels = () => {
  const [leftChannel, setLeftChannel] = React.useState(20);
  const [rightChannel, setRightChannel] = React.useState(20);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      //Make request to Backend
      console.log('leftChannel', leftChannel);
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [leftChannel]);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      //Make request to Backend
      console.log('rightChannel', rightChannel);
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [rightChannel]);

  return (
    <div className="flex justify-between pt-4">
      <div className="flex gap-x-8">
        <label>Left Channel Volume</label>
        <input
          value={leftChannel}
          onChange={(e) => {
            setLeftChannel(e.target.value);
          }}
          type="range"
          className="w-48"
        />
      </div>
      <div className="flex gap-x-8">
        <label>Right Channel Volume</label>
        <input
          value={rightChannel}
          onChange={(e) => {
            setRightChannel(e.target.value);
          }}
          type="range"
          className="w-48"
        />
      </div>
    </div>
  );
};

export default Channels;
