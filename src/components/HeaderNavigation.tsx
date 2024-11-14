import { useState } from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';

import { GUIDES } from '../data/guides';

const navElements = [
  { id: 'dublin', text: 'Dublin' },
  { id: 'about', text: 'Über uns' },
  {
    id: 'guides',
    text: 'Spaziergänge',
    submenu: GUIDES,
  },
  { id: 'impressum', text: 'Impressum' },
];

const HeaderNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-[85vw] py-2 px-4 mx-auto bg-black text-[#c0c0c0] font-bold uppercase flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Top Row: Brand and Hamburger Button */}
      <div className="flex items-center justify-between w-full">
        <Link to="" className="text-[1.25rem]">
          Reisef&uuml;hrer
        </Link>

        {/* Hamburger Button (visible on mobile only) */}
        <button
          className="block md:hidden p-2 focus:outline-none border border-[#c0c0c0] rounded-md"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-[#c0c0c0] mb-1 rounded"></div>
          <div className="w-6 h-1 bg-[#c0c0c0] mb-1 rounded"></div>
          <div className="w-6 h-1 bg-[#c0c0c0] rounded"></div>
        </button>
      </div>

      {/* Menu Items - Displayed in a new row below on mobile when open */}
      <ul
        className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0`}
      >
        {navElements.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </header>
  );
};

export default HeaderNavigation;
