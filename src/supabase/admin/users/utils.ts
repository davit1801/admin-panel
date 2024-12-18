import { User } from '@supabase/supabase-js';

export const mapUsersListForAdmin = (users: User[]) => {
  return users.map((user) => ({
    id: user?.id,
    email: user?.email,
    createdAt: user?.confirmed_at,
    phone: user?.phone,
    lastSignIn: user?.last_sign_in_at,
    key: user?.id,
  }));
};
