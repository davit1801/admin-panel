import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';

const UsersCreateView = lazy(() => import('@/pages/admin/users/views/create'));

const UsersCreateViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <UsersCreateView />
  </Suspense>
);

export default UsersCreateViewLoader;
