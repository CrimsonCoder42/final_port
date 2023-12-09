import React, { FC } from 'react';
import { styles } from "../styles";
import { blackhole } from "../assets";

const SpaceEffect = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <video
        autoPlay
        muted
        loop
        className="absolute top-0 h-full w-full object-cover"
      >
        <source src={blackhole} type="video/webm" />
      </video>
  
    </section>
  )
}

export default SpaceEffect