import React from 'react';

const Title = () => {
  return (
    <div className="flex w-2/4 mx-auto justify-between items-center border-b pb-6 mt-12">
      <h1 className="text-3xl font-semibold">
        MediaElementWebAudio Backend Example
      </h1>
      <a className="mr-8 flex items-center" href="home">
        <span class="material-symbols-outlined">house</span>
      </a>
    </div>
  );
};

export default Title;
