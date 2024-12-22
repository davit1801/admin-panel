import { USERS_MUTATION_KEYS } from '@/react-query/mutation/admin/users/enum';
import { updateUserInAdmin } from '@/supabase/admin/users';
import {
  UserError,
  UpdateUserPayload,
  UpdateUserResponse,
} from '@/supabase/admin/users/index.types';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export const useUpdateUserInAdmin = ({
  mutationOptions = {},
}: {
  mutationOptions?: Omit<
    UseMutationOptions<UpdateUserResponse, UserError, UpdateUserPayload>,
    'mutationKey'
  >;
} = {}): UseMutationResult<
  UpdateUserResponse,
  UserError,
  UpdateUserPayload
> => {
  return useMutation<UpdateUserResponse, UserError, UpdateUserPayload>({
    mutationKey: [USERS_MUTATION_KEYS.UPDATE],
    mutationFn: updateUserInAdmin,
    ...mutationOptions,
  });
};
