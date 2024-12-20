import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';

const UsersUpdateView = lazy(() => import('@/pages/admin/users/views/update'));

const UsersUpdateViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <UsersUpdateView />
  </Suspense>
);

export default UsersUpdateViewLoader;
