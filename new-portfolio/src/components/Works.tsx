import React, { FC } from 'react';
import { styles } from "../styles";

import PlanetCanvas from './planet';

const Works = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-x-0 top-[120px] bottom-[120px] max-w-7xl mx-auto ${styles.paddingX} mdx:flex mdx:flex-row mdx:items-start gap-5`}
      >
        <div className='flex justify-center mdx:justify-start'>
          <div className='w-full h-full' style={{ width: '100%', height: '60vh' }}>
            <PlanetCanvas />
          </div>
        </div>

        <div className={`mdx:mt-0 text-center md:text-left ${!styles.heroHeadText ? '' : styles.heroHeadText}`}>
          <h1 className={`text-white`}>
            Hi, I'm <span className='text-[#e8772e]'>Works</span>
          </h1>
          <p className={`${styles.heroSubText ? styles.heroSubText : ''} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='mdx:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
    </section>
  )
}

export default Works