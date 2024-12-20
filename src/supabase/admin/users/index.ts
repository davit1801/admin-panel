import { supabase } from '@/supabase';
import {
  createUserPayload,
  updateUserPayload,
} from '@/supabase/admin/users/index.types';
import { User } from '@supabase/supabase-js';

export const getUsersList = async () => {
  try {
    const { data, error } = await supabase.auth.admin.listUsers();

    if (error) {
      console.error('Error fetch users', error.message);
      throw new Error(error.message);
    }
    return data.users as User[];
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const updateUserInAdmin = async ({ id, values }: updateUserPayload) => {
  try {
    const { data, error } = await supabase.auth.admin.updateUserById(id, {
      ...values,
    });

    if (error) {
      console.error('Error fetch users', error.message);
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getSingleUserInAdmin = async (id: string) => {
  try {
    const { data, error } = await supabase.auth.admin.getUserById(id);

    if (error) {
      console.error('Error fetching user:', error.message);
      throw new Error(`Failed to fetch user: ${error.message}`);
    }

    return data.user;
  } catch (err) {
    console.error('Unexpected error:', err);
    throw err;
  }
};

export const createUserInAdmin = async ({
  email,
  password,
  // phone,
}: createUserPayload) => {
  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      // phone: phone,
      // phone_confirm: true,
    });

    if (error) {
      console.error('Error fetching user:', error.message);
      throw new Error(`Failed to fetch user: ${error.message}`);
    }

    return data.user;
  } catch (err) {
    console.error('Unexpected error:', err);
    throw err;
  }
};
