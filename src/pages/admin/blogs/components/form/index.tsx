import { BlogFormInitialValues } from '@/pages/admin/blogs/components/form/index.type';
import { updateBlogInAdmin } from '@/supabase/admin/blogs';
import { BlogUpdatedValues } from '@/supabase/admin/blogs/index.types';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const { Item } = Form;
type PropsType = {
  initialValues?: BlogFormInitialValues;
};

const BlogsCreateUpdateForm: React.FC<PropsType> = ({ initialValues }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form] = useForm();
  const { mutate } = useMutation({
    mutationKey: ['update-blog'],
    mutationFn: updateBlogInAdmin,
    onSuccess: () => {
      navigate('/dashboard/blogs');
    },
  });

  const handleSubmit = (values: BlogUpdatedValues) => {
    mutate({ id: id!, values: values });
  };

  return (
    <Form
      initialValues={initialValues}
      key={id}
      form={form}
      name="wrap"
      onFinish={handleSubmit}
      labelCol={{ flex: '110px' }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      style={{ maxWidth: 600 }}
    >
      <Item label="Title_ka" name="title_ka">
        <Input placeholder="Change title" />
      </Item>

      <Item label="Title_en" name="title_en">
        <Input placeholder="Chanhe title" />
      </Item>

      <Item label="Description_ka" name="description_ka">
        <TextArea placeholder="Change description" rows={5} />
      </Item>

      <Item label="Description_en" name="description_en">
        <TextArea placeholder="Change description" rows={5} />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default BlogsCreateUpdateForm;
