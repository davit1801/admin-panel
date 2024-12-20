import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';

const AuthLoginView = lazy(
  () => import('@/pages/auth/login/views/login/index'),
);

const AuthLoginViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <AuthLoginView />
  </Suspense>
);

export default AuthLoginViewLoader;
