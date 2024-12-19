import { userAtom } from '@/store/auth';
import { useAtomValue } from 'jotai';
import React, { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router';

const IsUnauthorizedGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    return <Navigate to={`/auth/login`} />;
  }

  return children || <Outlet />;
};

export default IsUnauthorizedGuard;
