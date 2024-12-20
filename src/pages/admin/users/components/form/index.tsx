import {
  CreateUpdateFormPropsType,
  FormInitialValuesTypes,
} from '@/pages/admin/users/components/form/index.type';
import { updateUserInAdmin } from '@/supabase/admin/users';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';
import { useNavigate, useParams } from 'react-router';

const { Item } = Form;

const UsersCreateUpdateForm: React.FC<CreateUpdateFormPropsType> = ({
  initialValues,
}) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ['update-user'],
    mutationFn: updateUserInAdmin,
    onSuccess: () => {
      navigate('/dashboard/users');
    },
  });
  const { id } = useParams<{ id: string }>();
  const [form] = useForm();
  const handleSubmit = (values: FormInitialValuesTypes) => {
    console.log(values);
    mutate({ id: id!, values: values });
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
      style={{ maxWidth: 400 }}
    >
      <Item label="Email" name="email" rules={[{ required: true }]}>
        <Input placeholder="Enter Email" />
      </Item>

      {/* <Item label="Password" name="password" rules={[{ required: true }]}>
        <Input placeholder="Enter Password" />
      </Item> */}

      <Item label="Phone Number" name="phone" rules={[{ required: true }]}>
        <Input placeholder="Enter Phone Number" />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit" disabled={isPending}>
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default UsersCreateUpdateForm;
