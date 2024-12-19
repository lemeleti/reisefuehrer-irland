import { Link } from 'react-router-dom';

// Components
import HeaderNavigationSubmenu from '../HeaderNavigationSubmenu/HeaderNavigationSubmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// Util
import { scrollToElement } from '../../util';

// Types
import { HeaderNavigationItemProps } from './types';

const HeaderNavigationItem: React.FC<HeaderNavigationItemProps> = ({
  item,
  isSubmenuOpen,
  onLeafClick,
  onSubmenuClick,
}) => {
  return (
    <li className="relative">
      <div className="inline-flex items-center w-full">
        <Link
          to={item.path}
          onClick={() => {
            if (item.submenu) {
              onSubmenuClick();
            } else {
              onLeafClick();
            }

            if (!item.disableScrolling) {
              scrollToElement(item.id);
            }
          }}
          className="block py-2 px-4 text-[0.9rem] whitespace-nowrap w-full hover:bg-gray-700"
        >
          {item.text}
          {item.submenu && (
            <FontAwesomeIcon
              icon={faCaretDown}
              className={`text-xl ml-2 ${!isSubmenuOpen ? '-rotate-90' : ''}`}
            />
          )}
        </Link>
      </div>
      {isSubmenuOpen && item.submenu && (
        <HeaderNavigationSubmenu
          submenu={item.submenu}
          onItemClick={onLeafClick}
        />
      )}
    </li>
  );
};

export default HeaderNavigationItem;
