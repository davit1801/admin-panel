import LoginForm from '@/pages/auth/login/components/LoginForm';

import React from 'react';

const LoginView: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <h1 className="text-center text-3xl">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginView;
