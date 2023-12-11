import React, { FC } from 'react';
import { styles } from "../styles";
import { blackhole } from "../assets";

const SpaceEffect = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[-1] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      >
        <source src={blackhole} type="video/webm" />
      </video>
    </div>
  );
};

export default SpaceEffect;
