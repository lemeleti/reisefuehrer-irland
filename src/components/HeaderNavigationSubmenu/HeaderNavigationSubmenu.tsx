import { Link } from 'react-router-dom';

// Util
import { scrollToElement } from '../../util';

// Types
import { HeaderNavigationSubmenuProps } from './types';

const HeaderNavigationSubmenu: React.FC<HeaderNavigationSubmenuProps> = ({
  submenu,
  onItemClick,
}) => {
  return (
    <ul className="md:z-[999] md:absolute left-0 mt-1 bg-gray-700 text-[#c0c0c0] shadow-md rounded-md flex flex-col space-y-1 p-2 w-full">
      {submenu.map((item) => (
        <li key={item.id}>
          <Link
            to={item.path}
            onClick={() => {
              onItemClick();
              scrollToElement(item.id);
            }}
            className="block py-1 px-4 text-sm whitespace-nowrap hover:bg-gray-700 rounded"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavigationSubmenu;
