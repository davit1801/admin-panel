import { BLOGS_MUTATION_KEYS } from '@/react-query/mutation/admin/blogs/enum';
import {
  BlogMutationPayload,
  BlogError,
} from '@/supabase/admin/blogs/index.types';
import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export const useCreateUpdateBlogInAdmin = <T>(
  mode: string,
  mutateFunction: MutationFunction<T, BlogMutationPayload>,
  {
    mutationOptions: mutationOptions,
  }: {
    mutationOptions?: Omit<
      UseMutationOptions<T, BlogError, BlogMutationPayload>,
      'mutationKey'
    >;
  } = {},
): UseMutationResult<T, BlogError, BlogMutationPayload> => {
  return useMutation<T, BlogError, BlogMutationPayload>({
    mutationKey: [
      mode === 'create'
        ? BLOGS_MUTATION_KEYS.CREATE
        : BLOGS_MUTATION_KEYS.UPDATE,
    ],
    mutationFn: mutateFunction,
    ...mutationOptions,
  });
};
