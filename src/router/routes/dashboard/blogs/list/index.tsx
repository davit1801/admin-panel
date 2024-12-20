import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';

const BlogsListView = lazy(() => import('@/pages/admin/blogs/views/list'));

const BlogsListViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <BlogsListView />
  </Suspense>
);

export default BlogsListViewLoader;
