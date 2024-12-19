import { formatDate } from '@/utils/formatDate';
import { User } from '@supabase/supabase-js';

export const mapUsersListForAdmin = (users: User[]) => {
  return users.map((user) => {
    const formattedCreateAt = formatDate(user.created_at);
    const formattedLastSignIn = user.last_sign_in_at
      ? formatDate(user.last_sign_in_at)
      : null;

    return {
      id: user?.id,
      email: user?.email,
      createdAt: formattedCreateAt,
      phone: user?.phone,
      lastSignIn: formattedLastSignIn,
      key: user?.id,
    };
  });
};
