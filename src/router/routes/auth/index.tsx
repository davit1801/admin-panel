import { AUTH_PATHS } from '@/router/routes/auth/index.enum';
import AuthLoginViewLoader from '@/router/routes/auth/login';
import { Route } from 'react-router';

export const AUTH_ROUTES = [
  <Route path={AUTH_PATHS.LOGIN} element={<AuthLoginViewLoader />} />,
];
