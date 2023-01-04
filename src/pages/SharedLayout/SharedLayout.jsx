import React, { Suspense } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <StyledLink to="">Home</StyledLink>
          <StyledLink to="movies">Movies</StyledLink>
        </nav>
      </StyledHeader>
      <Suspense
        fallback={
          <CirclesWithBar
            height="100"
            width="100"
            color=""
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor="#2986cc"
            innerCircleColor="#ffcb34"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
