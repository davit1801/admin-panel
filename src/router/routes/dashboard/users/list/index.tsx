import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';

const UsersListView = lazy(() => import('@/pages/admin/users/views/list'));

const UsersListViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <UsersListView />
  </Suspense>
);

export default UsersListViewLoader;
