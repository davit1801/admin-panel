import { USERS_QUERY_KEYS } from '@/react-query/query/admin/users/enum';
import { getSingleUserInAdmin, getUsersList } from '@/supabase/admin/users';
import { UserError } from '@/supabase/admin/users/index.types';
import { User } from '@supabase/supabase-js';
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

export const useGetUsersListForAdmin = <T>({
  queryOpions: queryOptions,
}: {
  queryOpions?: Omit<UseQueryOptions<User[], UserError, T>, 'queryKey'>;
} = {}): UseQueryResult<T, UserError> => {
  return useQuery<User[], UserError, T>({
    queryKey: [USERS_QUERY_KEYS.LIST],
    queryFn: getUsersList,
    ...queryOptions,
  });
};

export const useGetSingleUserForAdmin = <T>(
  id: string,
  {
    queryOpions: queryOptions,
  }: {
    queryOpions?: Omit<UseQueryOptions<User, UserError, T>, 'queryKey'>;
  } = {},
): UseQueryResult<T, UserError> => {
  return useQuery<User, UserError, T>({
    queryKey: [USERS_QUERY_KEYS.SINGLE, id],
    queryFn: () => getSingleUserInAdmin(id),
    ...queryOptions,
  });
};
