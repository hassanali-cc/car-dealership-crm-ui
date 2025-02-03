import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DealsList, { loader as dealLoader } from './features/Deal/DealsList.jsx'
import DealDetail, { loader as dealDetailLoader } from './features/Deal/DealDetail.jsx';
import CreateUser, { action as createUserAction } from './features/Authenticate/CreateUser';
import Login, { action as authenticateAction } from './features/Authenticate/Login.jsx';

import Home from './components/Home';
import Error from './components/Error';
import AppLayout from './components/AppLayout';
import ProtectedRoute from './features/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/create/Authenticate',
        element: <CreateUser />,
        action: createUserAction,
        errorElement: <Error />,
      },
      {
        path: '/login',
        element: <Login />,
        action: authenticateAction,
        errorElement: <Error />,
      },
      {
        element: <ProtectedRoute />, // Protect all nested routes
        children: [
          {
            path: '/Deal/list',
            element: <DealsList />,
            loader: dealLoader,
            errorElement: <Error />,
          },
          {
            path: '/Deal/:id',
            element: <DealDetail />,
            loader: dealDetailLoader,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
