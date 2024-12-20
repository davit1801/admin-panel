import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';
import { MenuProps } from 'antd';
import { Link } from 'react-router';

export const menuItems: MenuProps['items'] = [
  {
    key: `Users`,
    label: `Users`,

    children: [
      {
        key: 0,
        label: <Link to={DASHBOARD_PATHS.USERS_LIST}>Users</Link>,
      },
    ],
  },
  {
    key: `Posts`,
    label: `Posts`,

    children: [
      {
        key: 1,
        label: <Link to={DASHBOARD_PATHS.BLOGS_LIST}>Posts</Link>,
      },
    ],
  },
];
