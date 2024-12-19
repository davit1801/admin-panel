import { supabase } from '@/supabase';
import { BlogMutationPayload } from '@/supabase/admin/blogs/index.types';

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

export const updateBlogInAdmin = async ({
  id,
  inputFields,
}: BlogMutationPayload) => {
  try {
    const { data } = await supabase
      .from('blogs')
      .update(inputFields)
      .eq('id', id)
      .throwOnError();

    return data;
  } catch (error) {
    console.error(`Error updating blog with ID ${id}:`, error);
    throw error;
  }
};

export const deleteBlogInAdmin = async ({
  id,
  imagePath,
}: {
  id: string;
  imagePath: string;
}) => {
  const isConfirmed = window.confirm(
    'Are you sure you want to delete this blog?',
  );

  if (!isConfirmed) {
    return null;
  }

  try {
    const { data: blogData } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id)
      .throwOnError();

    const blogImgUrl = imagePath.replace('blog_images/', '');

    const { data: storageData, error: storageError } = await supabase.storage
      .from('blog_images')
      .remove([blogImgUrl]);

    if (storageError) {
      console.error(`Error deleting image at path ${imagePath}:`, storageError);
      throw storageError;
    }

    return { blogData, storageData };
  } catch (error) {
    console.error(`Error deleting blog with ID ${id}:`, error);
    throw error;
  }
};

export const createBlogInAdmin = async ({
  inputFields,
  id,
}: BlogMutationPayload) => {
  try {
    if (inputFields?.image_file) {
      const uploadResponse = await supabase.storage
        .from('blog_images')
        .upload(inputFields?.image_file?.name, inputFields?.image_file);

      if (uploadResponse.error) {
        throw new Error(`Image upload failed: ${uploadResponse.error.message}`);
      }

      const imageUrl = uploadResponse.data?.fullPath;

      const insertResponse = await supabase.from('blogs').insert({
        title_ka: inputFields.title_ka,
        title_en: inputFields.title_en,
        description_ka: inputFields.description_ka,
        description_en: inputFields.description_en,
        image_url: imageUrl,
        user_id: id,
      });

      if (insertResponse.error) {
        throw new Error(
          `Blog creation failed: ${insertResponse.error.message}`,
        );
      }

      return uploadResponse;
    } else {
      throw new Error('No image file provided in inputFields.');
    }
  } catch (error) {
    console.error('Error creating blog');
    throw error;
  }
};
