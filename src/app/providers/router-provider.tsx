import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { GenericLayout } from '../../pages/layouts/layouts.ui';
import { HomePage } from '../../pages/home';
import { FeedPage } from '../../pages/feed';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GenericLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'feed',
        element: <FeedPage />,
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
