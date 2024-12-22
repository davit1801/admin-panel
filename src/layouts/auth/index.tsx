import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout: React.FC = () => {
  return (
    <div className="mx-auto grid min-h-screen place-items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
