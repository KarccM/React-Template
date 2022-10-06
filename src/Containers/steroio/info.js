import React from 'react';

const Info = () => {
  return (
    <div className="flex flex-col w-2/4 mx-auto mt-16 border-b pb-4 text-gray-800">
      <h2 className="text-2xl mb-4 font-medium">
        Why use MediaElementWebAudio backend
      </h2>
      <div className=" font-normal text-sm ">
        With this backend you can load a big audio file and use it with WebAudio
        API. In this example it was added a StereoPannerNode and nodes to
        control independently the volume of both right and left channels,
        realised with SplitterNode and MergerNode to split and then merge
        channels with GainNode to control their volume.
      </div>
      <div className="bg-gray-50 border">
        <div className="bg-gray-100 m-2">loreim</div>
      </div>
    </div>
  );
};

export default Info;
