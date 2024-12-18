import { supabase } from '@/supabase';
import { BlogUpdatePayload } from '@/supabase/admin/blogs/index.types';

export const getBlogsList = async () => {
  try {
    const { data } = await supabase
      .from('blogs')
      .select('*')
      .order('id')
      .throwOnError();

    return data || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

export const getSingleBlog = async (id: string) => {
  try {
    const { data } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single()
      .throwOnError();

    return data;
  } catch (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    throw error;
  }
};

export const updateBlogInAdmin = async ({ id, values }: BlogUpdatePayload) => {
  try {
    const { data } = await supabase
      .from('blogs')
      .update(values)
      .eq('id', id)
      .throwOnError();

    return data;
  } catch (error) {
    console.error(`Error updating blog with ID ${id}:`, error);
    throw error;
  }
};
