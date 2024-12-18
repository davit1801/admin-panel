import React from 'react';
import { Table } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { getBlogsList } from '@/supabase/admin/blogs';
import { mapBlogsListForAdmin } from '@/supabase/admin/blogs/utils';
import { BlogForAdmin } from '@/pages/admin/blogs/components/list/index.types';

const { Column } = Table;

const BlogsList: React.FC = () => {
  const { data: blogsList, isFetching } = useQuery({
    queryKey: ['fetch-blogs'],
    queryFn: getBlogsList,
    select: (data) => mapBlogsListForAdmin(data),
  });

  return (
    <Table bordered loading={isFetching} dataSource={blogsList}>
      <Column<BlogForAdmin> title="Title_ka" dataIndex="title_ka" />
      <Column<BlogForAdmin> title="Title_en" dataIndex="title_en" />
      <Column<BlogForAdmin> title="Created At" dataIndex="created_at" />
      <Column<BlogForAdmin> title="ID" dataIndex="id" />
      <Column<BlogForAdmin> title="User ID" dataIndex="user_id" />
      <Column
        title="Actions"
        render={(_, row) => (
          <Link to={`update/${row.id}`}>
            <EditOutlined className="cursor-pointer text-lg text-amber-500" />
          </Link>
        )}
      />
    </Table>
  );
};

export default BlogsList;
