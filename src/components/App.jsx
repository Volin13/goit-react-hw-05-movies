import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, SharedLayout } from './index';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MovieCredits = lazy(() => import('./MovieCredits/MovieCredits'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/404/404'));

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCredits />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};
export default App;
