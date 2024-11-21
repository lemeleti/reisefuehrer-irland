import { Link } from 'react-router-dom';
import { scrollToElement } from '../util';

type DropdownProps = {
  submenu: { id: string; path: string; text: string }[];
  onDropdownClose: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({ submenu, onDropdownClose }) => {
  return (
    <ul className="md:z-[999] md:absolute left-0 mt-1 bg-black text-[#c0c0c0] shadow-md rounded-md flex flex-col space-y-1 p-2 w-full">
      {submenu.map((item) => (
        <li key={item.id}>
          <Link
            to={item.path}
            onClick={() => {
              onDropdownClose();
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

export default Dropdown;
