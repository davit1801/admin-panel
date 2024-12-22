import BlogsCreateViewLoader from '@/router/routes/dashboard/blogs/create';
import BlogsListViewLoader from '@/router/routes/dashboard/blogs/list';
import BlogsupdateViewLoader from '@/router/routes/dashboard/blogs/update';
import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';
import { Route } from 'react-router';

export const BLOGS_ROUTES = [
  <Route
    key={DASHBOARD_PATHS.BLOGS_LIST}
    path={DASHBOARD_PATHS.BLOGS_LIST}
    element={<BlogsListViewLoader />}
  />,
  <Route
    key={DASHBOARD_PATHS.BLOGS_CREATE}
    path={DASHBOARD_PATHS.BLOGS_CREATE}
    element={<BlogsCreateViewLoader />}
  />,
  <Route
    key={DASHBOARD_PATHS.BLOGS_UPDATE}
    path={DASHBOARD_PATHS.BLOGS_UPDATE + '/:id'}
    element={<BlogsupdateViewLoader />}
  />,
];
