import { AUTH_PATHS } from '@/router/routes/auth/index.enum';
import { logout } from '@/supabase/auth';
import { useMutation } from '@tanstack/react-query';
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: logout,
    onSuccess: () => {
      navigate(AUTH_PATHS.AUTH);
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleLogout = async () => {
    mutate();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
