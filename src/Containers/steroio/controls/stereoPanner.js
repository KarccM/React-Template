import React from 'react';

const StereoPanner = () => {
  const [stereoPanner, setStereoPannerl] = React.useState(50);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      //Make request to Backend
      console.log('stereoPanner', stereoPanner);
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [stereoPanner]);

  return (
    <div className="flex gap-x-48 border-b py-4">
      <span>StereoPanner</span>
      <div className="flex gap-x-32">
        <span>← left</span>
        <input
          type="range"
          value={stereoPanner}
          onChange={(e) => {
            setStereoPannerl(e.target.value);
          }}
          className="w-60"
        />
        <span>right →</span>
      </div>
    </div>
  );
};

export default StereoPanner;
