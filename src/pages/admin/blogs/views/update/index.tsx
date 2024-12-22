import FormInputSkeleton from '@/components/loaders/FormInputSkeleton';
import BlogsCreateUpdateForm from '@/pages/admin/blogs/components/form';
import { useGetSingleBlogForAdmin } from '@/react-query/query/admin/blogs';
import { updateBlogInAdmin } from '@/supabase/admin/blogs';
import { transformSingleBlogForAdmin } from '@/supabase/admin/blogs/utils';
import React from 'react';
import { useParams } from 'react-router';

const BlogsUpdateView: React.FC = () => {
  const { id } = useParams();

  const {
    data: blog,
    isError,
    isFetching,
  } = useGetSingleBlogForAdmin(id as string, {
    queryOpions: { select: transformSingleBlogForAdmin },
  });

  if (isError) return <p>Failed to load blog. Please try again later.</p>;

  return (
    <>
      {isFetching ? (
        <FormInputSkeleton />
      ) : (
        <BlogsCreateUpdateForm
          initialValues={blog}
          mode="update"
          mutationFunction={updateBlogInAdmin}
        />
      )}
    </>
  );
};

export default BlogsUpdateView;
