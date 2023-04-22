import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { withBase } from './helper';
import { Home } from './views';

const router = createBrowserRouter([
  {
    path: withBase('/'),
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
