import React, { FC } from 'react';
import { styles } from "../styles";
import { portpic } from "../assets";

const Works = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-x-0 top-[120px] bottom-[120px] max-w-7xl mx-auto ${styles.paddingX} mdx:flex mdx:flex-row mdx:items-start gap-5`}
      >
        <div className='flex justify-center mdx:justify-start'>
          <img 
            src={portpic}
            alt="Profile Picture"
            className='w-40 h-40 rounded-full mb-5 mdx:mb-0'
          />
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