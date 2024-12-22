import { AUTH_PATHS } from '@/router/routes/auth/index.enum';
import AuthLoginViewLoader from '@/router/routes/auth/login';
import { Route } from 'react-router';

export const AUTH_ROUTES = [
  <Route
    key={AUTH_PATHS.LOGIN}
    path={AUTH_PATHS.LOGIN}
    element={<AuthLoginViewLoader />}
  />,
];
