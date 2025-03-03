import { Link } from 'react-router-dom';

// Components
import HeaderNavigationItem from '../HeaderNavigationItem/HeaderNavigationItem';

// Hooks
import useClickOutside from '../../hooks/useClickOutside';
import useScrollingUp from '../../hooks/useScrollingUp';
import useToggle from '../../hooks/useToggle';

// Constants
import { NAV_ELEMENTS } from './constants';

const HeaderNavigation: React.FC = () => {
  const isScrollingUp = useScrollingUp();
  const { isOpen: isNavOpen, toggle: toggleNav, close: closeNav } = useToggle();
  const {
    isOpen: isSubMenuOpen,
    toggle: toggleSubmenu,
    close: closeSubmenu,
  } = useToggle();

  const navRef = useClickOutside(() => {
    closeSubmenu();
    closeNav();
  });

  return (
    <header
      ref={navRef}
      className={`${isScrollingUp ? 'sticky top-0' : 'md:sticky md:top-0'} w-[85vw] py-2 px-4 mx-auto bg-black text-[#c0c0c0] font-bold uppercase flex flex-col md:flex-row md:items-center md:justify-between z-[9999]`}
    >
      {/* Top Row: Brand and Hamburger Button */}
      <div className="flex items-center justify-between w-full">
        <Link
          to="home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[1.25rem]"
        >
          Reisef&uuml;hrer
        </Link>

        {/* Hamburger Button (visible on mobile only) */}
        <button
          className="block md:hidden p-2 focus:outline-none border border-[#c0c0c0] rounded-md"
          onClick={toggleNav}
        >
          <div className="w-6 h-1 bg-[#c0c0c0] mb-1 rounded"></div>
          <div className="w-6 h-1 bg-[#c0c0c0] mb-1 rounded"></div>
          <div className="w-6 h-1 bg-[#c0c0c0] rounded"></div>
        </button>
      </div>

      {/* Menu Items - Displayed in a new row below on mobile when open */}
      <ul
        className={`${isNavOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0`}
      >
        {NAV_ELEMENTS.map((item) => (
          <HeaderNavigationItem
            key={item.id}
            item={item}
            isSubmenuOpen={isSubMenuOpen}
            onLeafClick={() => {
              toggleNav();
              closeSubmenu();
            }}
            onSubmenuClick={toggleSubmenu}
          />
        ))}
      </ul>
    </header>
  );
};

export default HeaderNavigation;
