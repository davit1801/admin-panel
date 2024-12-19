import { Navigate, Route, Routes } from 'react-router';
import DashboardLayout from './layouts/dashboard';
import UsersListView from './pages/admin/users/views/list';
import UsersCreateView from '@/pages/admin/users/views/create';
import UsersUpdateView from '@/pages/admin/users/views/update';
import BlogsListView from '@/pages/admin/blogs/views/list';
import BlogsCreateView from '@/pages/admin/blogs/views/create';
import BlogsUpdateView from '@/pages/admin/blogs/views/update';
import LoginView from '@/pages/auth/login/views/login';
import AuthLayout from '@/layouts/auth';
import useAuth from '@/hooks/useAuth';
import IsUnauthorizedGuard from '@/router/guards/IsUnauthorizedGuard';
import RootLayout from '@/layouts/root';
import IsAuthorizedGuard from '@/router/guards/IsAuthorizedGuard';
import NotFoundView from '@/pages/not-found/views';

function App() {
  useAuth();

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Navigate to="dashboard" />} />

        <Route
          path="dashboard"
          element={
            <IsUnauthorizedGuard>
              <DashboardLayout />
            </IsUnauthorizedGuard>
          }
        >
          <Route path="users" element={<UsersListView />} />
          <Route path="users/create" element={<UsersCreateView />} />
          <Route path="users/update/:id" element={<UsersUpdateView />} />
          <Route path="blogs" element={<BlogsListView />} />
          <Route path="blogs/create" element={<BlogsCreateView />} />
          <Route path="blogs/update/:id" element={<BlogsUpdateView />} />
        </Route>
        <Route
          path="auth"
          element={
            <IsAuthorizedGuard>
              <AuthLayout />
            </IsAuthorizedGuard>
          }
        >
          <Route path="login" element={<LoginView />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
