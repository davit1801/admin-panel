import { BLOGS_ROUTES } from '@/router/routes/dashboard/blogs';
import { USERS_ROUTES } from '@/router/routes/dashboard/users';

export const DASHBOARD_ROUTES = [...USERS_ROUTES, ...BLOGS_ROUTES];
