import LoginForm from '@/pages/auth/login/components/LoginForm';

import React from 'react';

const LoginView: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-2xl">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginView;
