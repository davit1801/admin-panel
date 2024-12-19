import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout: React.FC = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
