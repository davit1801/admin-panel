import LogoutButton from '@/components/buttons/LogoutButton';
import { menuItems } from '@/layouts/dashboard/config';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router';
import logo from '@/assets/images/blog-logo.png';
import { DASHBOARD_PATHS } from '@/router/routes/dashboard/index.enum';

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to={DASHBOARD_PATHS.DASHBOARD}>
          <img src={logo} alt="blogo logo" className="w-10" />
        </Link>
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
            <Menu mode="inline" style={{ height: '100%' }} items={menuItems} />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: '80vh' }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Admin Panel ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default DashboardLayout;
