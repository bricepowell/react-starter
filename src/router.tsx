import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import HomePage from './pages/HomePage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import PostsPage from './pages/PostsPage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'posts', element: <PostsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
