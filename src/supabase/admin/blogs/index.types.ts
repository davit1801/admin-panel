import { PostgrestError } from '@supabase/supabase-js';

export type SingleBlogType = {
  created_at: string;
  description_en: string | null;
  description_ka: string | null;
  id: number;
  image_url: string | null;
  title_en: string | null;
  title_ka: string | null;
  user_id: string | null;
} | null;

export type BlogFormValues = {
  title_ka?: string;
  title_en?: string;
  description_ka?: string;
  description_en?: string;
  image_file?: null | File;
};

export type BlogMutationPayload = {
  id: string;
  inputFields: BlogFormValues;
};

export type BlogCreatePayload = {
  id: string;
  inputFields: BlogFormValues;
};

export type createBlogResponse = {
  data: {
    id: string;
    path: string;
    fullPath: string;
  };
  error: null;
};

export type BlogError = {
  error: PostgrestError | null;
};
