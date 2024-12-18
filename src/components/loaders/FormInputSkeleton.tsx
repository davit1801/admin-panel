import { Form, Skeleton, Space } from 'antd';
import React from 'react';

const { Input, Button } = Skeleton;

const FormInputSkeleton: React.FC = () => {
  return (
    <Form>
      <Space direction="vertical" size="large">
        <Input active />
        <Input active />
        <Button active />
      </Space>
    </Form>
  );
};

export default FormInputSkeleton;
