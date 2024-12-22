import { BLOGS_QUERY_KEYS } from '@/react-query/query/admin/blogs/enum';
import {
  getBlogsListForAdmin,
  getSingleBlogForAdmin,
} from '@/supabase/admin/blogs';
import { BlogError, SingleBlogType } from '@/supabase/admin/blogs/index.types';
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';

export const useGetBlogsListForAdmin = <T>({
  queryOpions: queryOptions,
}: {
  queryOpions?: Omit<
    UseQueryOptions<SingleBlogType[], BlogError, T>,
    'queryKey'
  >;
} = {}): UseQueryResult<T, BlogError> => {
  return useQuery<SingleBlogType[], BlogError, T>({
    queryKey: [BLOGS_QUERY_KEYS.LIST],
    queryFn: getBlogsListForAdmin,
    ...queryOptions,
  });
};

export const useGetSingleBlogForAdmin = <T>(
  id: string,
  {
    queryOpions: queryOptions,
  }: {
    queryOpions?: Omit<
      UseQueryOptions<SingleBlogType, BlogError, T>,
      'queryKey'
    >;
  } = {},
): UseQueryResult<T, BlogError> => {
  return useQuery<SingleBlogType, BlogError, T>({
    queryKey: [BLOGS_QUERY_KEYS.SINGLE, id],
    queryFn: () => getSingleBlogForAdmin(id),
    ...queryOptions,
  });
};
