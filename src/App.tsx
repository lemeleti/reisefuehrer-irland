import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';
import RoutePage from './pages/RoutePage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <LandingPage /> },
      {
        element: <RootLayout />,
        children: [
          { path: 'home', element: <HomePage /> },
          { path: 'guides/:id', element: <RoutePage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
