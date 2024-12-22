import { BlogFormInitialValues } from '@/pages/admin/blogs/components/form/index.type';
import { useCreateUpdateBlogInAdmin } from '@/react-query/mutation/admin/blogs';
import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';
import {
  BlogFormValues,
  BlogMutationPayload,
  createBlogResponse,
} from '@/supabase/admin/blogs/index.types';
import { MutationFunction } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const { Item } = Form;

type PropsType = {
  initialValues?: BlogFormInitialValues;
  mode: 'create' | 'update';
  mutationFunction: MutationFunction<
    null | createBlogResponse,
    BlogMutationPayload
  >;
};

const BlogsCreateUpdateForm: React.FC<PropsType> = ({
  mode,
  initialValues,
  mutationFunction,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form] = useForm();

  const { mutate, isPending } = useCreateUpdateBlogInAdmin(
    mode,
    mutationFunction,
    {
      mutationOptions: {
        onSuccess: () => {
          navigate(
            `${DASHBOARD_PATHS.DASHBOARD}/${DASHBOARD_PATHS.BLOGS_LIST}`,
          );
        },
      },
    },
  );

  const handleSubmit = (values: BlogFormValues) => {
    const payload =
      mode === 'create'
        ? {
            id: 'c2e5c202-8b13-46bb-a3b9-f7493b4bd6a1',
            inputFields: values,
          }
        : { id: id!, inputFields: values };

    mutate(payload);
  };

  return (
    <Form
      initialValues={initialValues}
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

      <Item label="Image" name="image_file" valuePropName="file">
        <Input
          disabled={mode === 'update'}
          placeholder="Change description"
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            form.setFieldsValue({ image_file: file });
          }}
        />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit" disabled={isPending}>
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default BlogsCreateUpdateForm;
