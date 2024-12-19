import { SingleBlogType } from '@/supabase/admin/blogs/index.types';
import { formatDate } from '@/utils/formatDate';

export const mapBlogsListForAdmin = (blogs: SingleBlogType[]) => {
  return blogs.map((blog) => {
    const createAt = blog ? formatDate(blog.created_at) : null;

    return {
      key: blog?.id,
      id: blog?.id,
      title_ka: blog?.title_ka,
      title_en: blog?.title_en,
      description_ka: blog?.description_ka,
      description_en: blog?.description_en,
      created_at: createAt,
      user_id: blog?.user_id,
      image_url: blog?.image_url,
    };
  });
};
