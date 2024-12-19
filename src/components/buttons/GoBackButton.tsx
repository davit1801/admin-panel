import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router';

const GoBackButton: React.FC = () => {
  return (
    <Link to="/dashboard">
      <Button>Go back</Button>
    </Link>
  );
};

export default GoBackButton;
