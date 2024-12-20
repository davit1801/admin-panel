import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router';

const GoBackButton: React.FC = () => {
  return (
    <Link to={DASHBOARD_PATHS.DASHBOARD}>
      <Button>Go back</Button>
    </Link>
  );
};

export default GoBackButton;
