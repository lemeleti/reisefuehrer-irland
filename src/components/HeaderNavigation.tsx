import { Link } from 'react-router-dom';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeaderNavigation: React.FC = () => {
  const navElements = [
    { id: 'dublin', text: 'Dublin' },
    { id: 'about', text: 'Über uns' },
    { id: 'guides', text: 'Spaziergänge' },
    { id: 'impressum', text: 'Impressum' },
  ];

  return (
    <nav className="flex items-center">
      <ul className="flex">
        {navElements.map((item) => (
          <li key={item.id}>
            <Link
              to={`#${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className="py-2 px-4 text-[0.9rem]"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
