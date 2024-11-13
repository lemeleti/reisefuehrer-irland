import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'home', element: <LandingPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
