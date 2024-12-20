import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import AuthLayout from '@/layouts/auth';
import IsUnauthorizedGuard from '@/router/guards/IsUnauthorizedGuard';
import RootLayout from '@/layouts/root';
import IsAuthorizedGuard from '@/router/guards/IsAuthorizedGuard';
import NotFoundView from '@/pages/not-found/views';
import DashboardLayout from '@/layouts/dashboard';
import { DASHBOARD_ROUTES } from '@/router/routes/dashboard';
import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';
import { AUTH_PATHS } from '@/router/routes/auth/index.enum';
import { AUTH_ROUTES } from '@/router/routes/auth';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to={DASHBOARD_PATHS.DASHBOARD} />} />

        <Route
          path={DASHBOARD_PATHS.DASHBOARD}
          element={
            <IsUnauthorizedGuard>
              <DashboardLayout />
            </IsUnauthorizedGuard>
          }
        >
          {DASHBOARD_ROUTES}
        </Route>

        <Route
          path={AUTH_PATHS.AUTH}
          element={
            <IsAuthorizedGuard>
              <AuthLayout />
            </IsAuthorizedGuard>
          }
        >
          <Route index element={<Navigate to={AUTH_PATHS.LOGIN} />} />
          {AUTH_ROUTES}
        </Route>
      </Route>

      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default AppRoutes;
