import { useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from '../util';

type NavItemProps = {
  item: {
    path: string;
    id: string;
    disableScrolling?: boolean;
    text: string;
    submenu?: {
      id: string;
      path: string;
      text: string;
    }[];
  };
};

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((isOpen) => !isOpen);

  return (
    <li className="relative">
      <div className="inline-flex items-center w-full">
        <Link
          to={item.path}
          onClick={() => {
            if (!item.disableScrolling) {
              scrollToSection(item.id);
            }
            toggleDropdown();
          }}
          className="block py-2 px-4 text-[0.9rem] whitespace-nowrap w-full hover:bg-gray-700"
        >
          {item.text}
          {item.submenu && (
            <FontAwesomeIcon
              icon={faCaretDown}
              onClick={toggleDropdown}
              className="text-xl ml-2"
            />
          )}
        </Link>
      </div>
      {isDropdownOpen && item.submenu && <Dropdown submenu={item.submenu} />}
    </li>
  );
};

export default NavItem;
