import { SingleBlogType } from '@/supabase/admin/blogs/index.types';

export const mapBlogsListForAdmin = (blogs: SingleBlogType[]) => {
  return blogs.map((blog) => ({
    key: blog?.id,
    id: blog?.id,
    title_ka: blog?.title_ka,
    title_en: blog?.title_en,
    description_ka: blog?.description_ka,
    description_en: blog?.description_en,
  }));
};
