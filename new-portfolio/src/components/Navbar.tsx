import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { toggleVariants, backgroundVariants } from '../utils/motion';


const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const checkScreenWidthAndUpdateToggle = () => {
    const mdxScreenSize = 850; // Replace with the pixel width of your 'mdx' breakpoint
    if (window.innerWidth >= mdxScreenSize) {
      setToggle(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
    const isScrolled = window.scrollY > 40;  
    setScrolled(isScrolled);
  };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    checkScreenWidthAndUpdateToggle(); // Check on initial mount
    window.addEventListener('resize', checkScreenWidthAndUpdateToggle);
    return () => {
      window.removeEventListener('resize', checkScreenWidthAndUpdateToggle);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => setActive('')}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold'>DA</p>
        </Link>

        <ul className='list-none hidden mdx:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-custom-orange text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <Link to={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className='mdx:hidden flex flex-1 justify-end items-center'>
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            animate={toggle ? 'opened' : 'closed'}
            variants={toggleVariants}
          />
        </div>

        <motion.div
          initial='closed'
          animate={toggle ? 'open' : 'closed'}
          variants={backgroundVariants}
          className={`${
            toggle ? 'flex' : 'hidden'
          } absolute right-0 top-20 p-6 mx-4 my-2 max-w-[140px] z-10 rounded-xl transition-all duration-300 bg-custom-orange bg-opacity-50 flex-col items-center justify-start`}
        >
          <ul className='list-none flex flex-col gap-4'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-white' : 'text-secondary'} hover:text-custom-orange font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <Link to={`#${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

