import React, { FC } from 'react';
import { styles } from "../styles";
import { portpic } from "../assets";

const Hero: FC = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} sm:flex sm:flex-row sm:items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5 mb-5 sm:mb-0'>
          <img 
            src={portpic}
            alt="Profile Picture"
            className='w-40 h-40 sm:w-40 sm:h-40 rounded-full mb-5 sm:mb-0'
          />
        </div>

        <div className={`sm:mt-0 ${!styles.heroHeadText ? '' : styles.heroHeadText}`}>
          <h1 className={`text-white`}>
            Hi, I'm <span className='text-[#e8772e]'>Devin</span>
          </h1>
          <p className={`${styles.heroSubText ? styles.heroSubText : ''} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <div className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;



