import FormInputSkeleton from '@/components/loaders/FormInputSkeleton';
import UsersCreateUpdateForm from '@/pages/admin/users/components/form';
import { getSingleUserInAdmin } from '@/supabase/admin/users';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';

const UsersUpdateView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isFetching } = useQuery({
    queryKey: ['get-single-user', id],
    queryFn: () => getSingleUserInAdmin(id as string),
    select: (data) => ({
      email: data.email || '',
      phone: data.phone || '',
    }),
  });

  return (
    <>
      {isFetching ? (
        <FormInputSkeleton />
      ) : (
        <UsersCreateUpdateForm initialValues={user} />
      )}{' '}
    </>
  );
};

export default UsersUpdateView;
