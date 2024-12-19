import BlogsCreateUpdateForm from '@/pages/admin/blogs/components/form';
import { createBlogInAdmin } from '@/supabase/admin/blogs';
import React from 'react';

const BlogsCreateView: React.FC = () => {
  return (
    <BlogsCreateUpdateForm mode="create" mutationFunction={createBlogInAdmin} />
  );
};

export default BlogsCreateView;
