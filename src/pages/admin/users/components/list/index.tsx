import React from 'react';
import { Button, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { UserForAdmin } from '@/pages/admin/users/components/list/index.types';
import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';
import { useGetUsersListForAdmin } from '@/react-query/query/admin/users';
import { mapUsersListForAdmin } from '@/supabase/admin/users/utils';

const { Column } = Table;

const UsersList: React.FC = () => {
  const { data: usersList, isFetching } = useGetUsersListForAdmin({
    queryOpions: { select: mapUsersListForAdmin },
  });

  return (
    <Table
      bordered
      loading={isFetching}
      dataSource={usersList}
      title={() => (
        <Link
          to={`${DASHBOARD_PATHS.DASHBOARD}/${DASHBOARD_PATHS.USERS_CREATE}`}
        >
          <Button type="primary" disabled>
            Create user
          </Button>
        </Link>
      )}
    >
      <Column<UserForAdmin> title="Email" dataIndex="email" />
      <Column<UserForAdmin> title="Create At" dataIndex="createdAt" />
      <Column<UserForAdmin> title="Phone" dataIndex="phone" />
      <Column<UserForAdmin> title="Last Sign In" dataIndex="lastSignIn" />
      <Column<UserForAdmin>
        title="Actions"
        render={(_, row) => (
          <Link
            to={`${DASHBOARD_PATHS.DASHBOARD}/${DASHBOARD_PATHS.USERS_UPDATE}/${row.id}`}
          >
            <EditOutlined className="cursor-pointer text-lg text-blue-950" />
          </Link>
        )}
      />
    </Table>
  );
};

export default UsersList;
