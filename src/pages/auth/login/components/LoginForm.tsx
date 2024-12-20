import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';
import { login } from '@/supabase/auth';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

const LoginForm: React.FC = () => {
  const naviagte = useNavigate();
  const { mutate, isPending, isError } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: () => {
      naviagte(DASHBOARD_PATHS.DASHBOARD);
    },
  });

  const onSubmit = (values: { email: string; password: string }) => {
    mutate(values);
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360, width: '100%' }}
      onFinish={onSubmit}
      validateTrigger="onBlur"
      className="p-6"
      size="large"
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
          {
            type: 'email',
            message: 'Please enter a valid Email!',
          },
        ]}
        validateTrigger={['onBlur', 'onSubmit']}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Please input your Password!' },
          {
            min: 8,
            message: 'Password must be at least 8 characters long!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      {isError && (
        <p className="mb-2 font-semibold text-red-500">
          Username or password is incorrect
        </p>
      )}

      <Form.Item>
        <Button block type="primary" htmlType="submit" disabled={isPending}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
