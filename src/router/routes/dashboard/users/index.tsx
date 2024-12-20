import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';
import UsersCreateViewLoader from '@/router/routes/dashboard/users/create';
import UsersListViewLoader from '@/router/routes/dashboard/users/list';
import UsersUpdateViewLoader from '@/router/routes/dashboard/users/update';
import { Route } from 'react-router';

export const USERS_ROUTES = [
  <Route path={DASHBOARD_PATHS.USERS_LIST} element={<UsersListViewLoader />} />,
  <Route
    path={DASHBOARD_PATHS.USERS_CREATE}
    element={<UsersCreateViewLoader />}
  />,
  <Route
    path={DASHBOARD_PATHS.USERS_UPDATE + '/:id'}
    element={<UsersUpdateViewLoader />}
  />,
];
