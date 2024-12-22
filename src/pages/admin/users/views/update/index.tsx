import FormInputSkeleton from '@/components/loaders/FormInputSkeleton';
import UsersCreateUpdateForm from '@/pages/admin/users/components/form';
import { useGetSingleUserForAdmin } from '@/react-query/query/admin/users';
import React from 'react';
import { useParams } from 'react-router';

const UsersUpdateView: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: user, isFetching } = useGetSingleUserForAdmin(id as string, {
    queryOpions: {
      select: (data) => ({
        email: data.email || '',
        phone: data.phone || '',
      }),
    },
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
