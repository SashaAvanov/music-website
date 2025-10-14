import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/music' element={<MusicPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App