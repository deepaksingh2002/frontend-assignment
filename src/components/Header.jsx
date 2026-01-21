import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../assets/menu_icon.png';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-10 w-full flex items-center justify-between cursor-pointer
      px-4 py-1 text-white transition-all duration-500
      ${sticky ? 'bg-[#212ea0]' : 'bg-transparent'}
      max-[840px]:py-4`}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-[20vw] p-1 max-[1000px]:w-[140px]"
      />

      {/* Menu */}
      <ul
        className={`flex items-center transition-all duration-500
        max-[840px]:fixed max-[840px]:top-0 max-[840px]:bottom-0 max-[840px]:bg-[#212ea0]
        max-[840px]:w-[200px] max-[840px]:pt-[70px]
        ${mobileMenu ? 'right-0' : 'right-[-200px]'}
        max-[840px]:flex-col`}
      >
        <li className="mx-5 my-1 text-base max-[1000px]:mx-4 max-[840px]:my-6">
          <Link to="hero" smooth duration={500}>Home</Link>
        </li>

        <li className="mx-5 my-1 text-base max-[1000px]:mx-4 max-[840px]:my-6">
          <Link to="programs" smooth offset={-260} duration={500}>Program</Link>
        </li>

        <li className="mx-5 my-1 text-base max-[1000px]:mx-4 max-[840px]:my-6">
          <Link to="about" smooth offset={-150} duration={500}>About Us</Link>
        </li>

        <li className="mx-5 my-1 text-base max-[1000px]:mx-4 max-[840px]:my-6">
          <Link to="campus" smooth offset={-260} duration={500}>Campus</Link>
        </li>

        <li className="mx-5 my-1 text-base max-[1000px]:mx-4 max-[840px]:my-6">
          <Link
            to="contact"
            smooth
            offset={-260}
            duration={500}
            className="px-4 py-2 bg-white text-[#212ea0] rounded"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Menu Icon */}
      <img
        src={menu_icon}
        alt="menu"
        className="hidden w-[30px] cursor-pointer max-[840px]:block"
        onClick={() => setMobileMenu(!mobileMenu)}
      />
    </nav>
  );
}

export default Navbar;
