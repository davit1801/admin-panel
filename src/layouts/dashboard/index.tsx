import LogoutButton from '@/components/buttons/LogoutButton';
import { Layout, Menu, MenuProps, theme } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router';

const { Header, Content, Footer, Sider } = Layout;

const items2: MenuProps['items'] = [
  {
    key: `Users`,
    label: `Users`,

    children: [
      {
        key: 0,
        label: <Link to="users">Users</Link>,
      },
    ],
  },
  {
    key: `Posts`,
    label: `Posts`,

    children: [
      {
        key: 1,
        label: <Link to="blogs">Posts</Link>,
      },
    ],
  },
];

const DashboardLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}
      >
        <LogoutButton />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: '80vh' }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default DashboardLayout;
