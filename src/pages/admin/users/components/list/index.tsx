import React from 'react';
import { Button, Table } from 'antd';
import { getUsersList } from '@/supabase/admin/users';
import { mapUsersListForAdmin } from '@/supabase/admin/users/utils';
import { useQuery } from '@tanstack/react-query';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { UserForAdmin } from '@/pages/admin/users/components/list/index.types';

const { Column } = Table;

const UsersList: React.FC = () => {
  const { data: usersList, isFetching } = useQuery({
    queryKey: ['fetch-users'],
    queryFn: getUsersList,
    select: (data) => mapUsersListForAdmin(data),
  });

  return (
    <Table
      title={() => (
        <Link to={'create'}>
          <Button type="primary">Create Blog</Button>
        </Link>
      )}
      bordered
      loading={isFetching}
      dataSource={usersList}
    >
      <Column<UserForAdmin> title="Email" dataIndex="email" />
      <Column<UserForAdmin> title="Create At" dataIndex="createdAt" />
      <Column<UserForAdmin> title="Phone" dataIndex="phone" />
      <Column<UserForAdmin> title="Last Sign In" dataIndex="lastSignIn" />
      <Column<UserForAdmin>
        title="Actions"
        render={(_, row) => (
          <Link to={`update/${row.id}`}>
            <EditOutlined className="cursor-pointer text-lg text-blue-950" />
          </Link>
        )}
      />
    </Table>
  );
};

export default UsersList;
