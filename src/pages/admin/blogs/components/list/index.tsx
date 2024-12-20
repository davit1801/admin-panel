import React from 'react';
import { Button, Table } from 'antd';
import { useMutation, useQuery } from '@tanstack/react-query';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { deleteBlogInAdmin, getBlogsList } from '@/supabase/admin/blogs';
import { mapBlogsListForAdmin } from '@/supabase/admin/blogs/utils';
import { BlogForAdmin } from '@/pages/admin/blogs/components/list/index.types';
import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';

const { Column } = Table;

const BlogsList: React.FC = () => {
  const {
    data: blogsList,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['fetch-blogs'],
    queryFn: getBlogsList,
    select: (data) => mapBlogsListForAdmin(data),
  });

  const { mutate } = useMutation({
    mutationKey: ['delete-blog'],
    mutationFn: deleteBlogInAdmin,
    onSuccess: () => refetch(),
  });

  return (
    <Table
      title={() => (
        <Link
          to={`${DASHBOARD_PATHS.DASHBOARD}/${DASHBOARD_PATHS.BLOGS_CREATE}`}
        >
          <Button type="primary">Create Blog</Button>
        </Link>
      )}
      bordered
      loading={isFetching}
      dataSource={blogsList}
    >
      <Column<BlogForAdmin> title="Title_ka" dataIndex="title_ka" />
      <Column<BlogForAdmin> title="Title_en" dataIndex="title_en" />
      <Column title="Created At" dataIndex="created_at" />
      <Column<BlogForAdmin> title="Blog_ID" dataIndex="id" />
      <Column<BlogForAdmin> title="User_ID" dataIndex="user_id" />
      <Column
        title="Actions"
        render={(_, row) => {
          return (
            <div className="flex items-center gap-5">
              <Link
                to={`${DASHBOARD_PATHS.DASHBOARD}/${DASHBOARD_PATHS.BLOGS_UPDATE}/${row.id}`}
              >
                <EditOutlined className="cursor-pointer text-lg text-blue-950" />
              </Link>
              <button
                onClick={() => {
                  mutate({ id: row.id, imagePath: row.image_url });
                }}
              >
                <DeleteOutlined className="cursor-pointer text-lg text-blue-950" />
              </button>
            </div>
          );
        }}
      />
    </Table>
  );
};

export default BlogsList;
