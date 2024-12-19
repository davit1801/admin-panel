import useAuth from '@/hooks/useAuth';
import LoadingPage from '@/components/loaders/LoadingPage';
import React from 'react';
import { Outlet } from 'react-router';

const RootLayout: React.FC = () => {
  const { isLoading } = useAuth();

  return <>{isLoading ? <LoadingPage /> : <Outlet />}</>;
};

export default RootLayout;
