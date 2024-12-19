import FormInputSkeleton from '@/components/loaders/FormInputSkeleton';
import BlogsCreateUpdateForm from '@/pages/admin/blogs/components/form';
import { getSingleBlog, updateBlogInAdmin } from '@/supabase/admin/blogs';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';

const BlogsUpdateView: React.FC = () => {
  const { id } = useParams();

  const {
    data: blog,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ['get-single-blog', id],
    queryFn: () => getSingleBlog(id!),
    select: (data) => ({
      title_ka: data?.title_ka || '',
      title_en: data?.title_en || '',
      description_ka: data?.description_ka || '',
      description_en: data?.description_en || '',
    }),
    enabled: !!id,
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
