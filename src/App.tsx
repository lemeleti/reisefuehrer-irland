import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';
import RoutePage from './pages/RoutePage';

const router = createHashRouter(
  [
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
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
