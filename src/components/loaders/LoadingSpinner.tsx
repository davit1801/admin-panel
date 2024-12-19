import { Flex, Spin } from 'antd';
import React from 'react';

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const LoadingSpinner: React.FC = () => {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
      <Flex align="center" gap="middle">
        <Spin tip="loading" size="large">
          {content}
        </Spin>
      </Flex>
    </div>
  );
};

export default LoadingSpinner;
