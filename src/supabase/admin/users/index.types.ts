import { AuthError, User } from '@supabase/supabase-js';

export type UpdateUserPayload = {
  id: string;
  values: {
    email: string;
    phone: string;
  };
};

export type createUserPayload = {
  email: string;
  password: string;
  // phone: string;
};

export type UpdateUserResponse = {
  user: User;
};
export type UserError = {
  error: AuthError | null;
};
