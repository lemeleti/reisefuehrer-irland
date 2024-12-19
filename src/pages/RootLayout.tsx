import { Outlet } from 'react-router';
import HeaderNavigation from '../components/HeaderNavigation/HeaderNavigation';

const RootLayout: React.FC = () => {
  return (
    <>
      <HeaderNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
