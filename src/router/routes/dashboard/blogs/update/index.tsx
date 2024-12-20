import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';

const BlogsUpdateView = lazy(() => import('@/pages/admin/blogs/views/update'));

const BlogsupdateViewLoader: React.FC = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <BlogsUpdateView />
  </Suspense>
);

export default BlogsupdateViewLoader;
