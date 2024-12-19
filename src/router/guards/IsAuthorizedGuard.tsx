import { userAtom } from '@/store/auth';
import { useAtomValue } from 'jotai';
import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router';

const IsAuthorizedGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return children || <Outlet />;
};

export default IsAuthorizedGuard;
