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

export type BlogUpdatedValues = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
};

export type BlogUpdatePayload = {
  id: string;
  values: BlogUpdatedValues;
};
