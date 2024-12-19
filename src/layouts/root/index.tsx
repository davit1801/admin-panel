import useAuth from '@/hooks/useAuth';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';
import React from 'react';
import { Outlet } from 'react-router';

const RootLayout: React.FC = () => {
  const { isLoading } = useAuth();

  return <>{isLoading ? <LoadingSpinner /> : <Outlet />}</>;
};

export default RootLayout;
