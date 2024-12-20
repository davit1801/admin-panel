import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';

const BlogsCreateView = lazy(() => import('@/pages/admin/blogs/views/create'));

const BlogsCreateViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <BlogsCreateView />
  </Suspense>
);

export default BlogsCreateViewLoader;
