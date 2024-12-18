import { Navigate, Route, Routes } from 'react-router';
import DashboardLayout from './layouts/dashboard';
import UsersListView from './pages/admin/users/views/list';
import UsersCreateView from '@/pages/admin/users/views/create';
import UsersUpdateView from '@/pages/admin/users/views/update';
import BlogsListView from '@/pages/admin/blogs/views/list';
import BlogsCreateView from '@/pages/admin/blogs/views/create';
import BlogsUpdateView from '@/pages/admin/blogs/views/update';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="users" element={<UsersListView />} />
          <Route path="users/create" element={<UsersCreateView />} />
          <Route path="users/update/:id" element={<UsersUpdateView />} />
          <Route path="blogs" element={<BlogsListView />} />
          <Route path="blogs/create" element={<BlogsCreateView />} />
          <Route path="blogs/update/:id" element={<BlogsUpdateView />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to={'dashboard'} />}></Route>
    </Routes>
  );
}

export default App;
