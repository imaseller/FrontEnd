import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

// Components
import ManagerList from './components/Admin/ManagerList';
import BlockManagerList from './components/Admin/BlockManagerList';
import ManagerDetail from './components/Admin/ManagerDetail';
import MemberList from './components/Member/MemberList';
import BlockMemberList from './components/Member/BlockMemberList';
import ReviewList from './components/Member/ReviewList';
import ReviewDetail from './components/Member/ReviewDetail';
import MemberDetail from './components/Member/MemberDetail';
import ProductList from './components/Service/ProductList';
import ProductDetail from './components/Service/ProductDetail';
import List from './pages/List';
import AdminLogin from './pages/AdminLogin';
import Main from './pages/Main';
import FindId from './pages/FindId';
import FindPassword from './pages/FindPassword';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const renderWithLayout = (Component) => (
    <List>
      <Component />
    </List>
  );

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main' element={<Main />} />
          <Route path='/admin/auth/login' element={<AdminLogin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/findId' element={<FindId />} />
          <Route path='/findPassword' element={<FindPassword />} />

          {/* Manager Routes */}
          <Route path='/admin' element={renderWithLayout(ManagerList)} />
          <Route
            path='/admin/detail/:id'
            element={renderWithLayout(ManagerDetail)}
          />
          <Route
            path='/blockmanagerlist'
            element={renderWithLayout(BlockManagerList)}
          />

          {/* Member Routes */}
          <Route path='/memberlist' element={renderWithLayout(MemberList)} />
          <Route
            path='/memberlist/detail/:seq'
            element={renderWithLayout(MemberDetail)}
          />
          <Route
            path='/blockmemberlist'
            element={renderWithLayout(BlockMemberList)}
          />
          <Route path='/reviewlist' element={renderWithLayout(ReviewList)} />
          <Route
            path='/reviewlist/detail/:no'
            element={renderWithLayout(ReviewDetail)}
          />

          {/* Product Routes */}
          <Route path='/productlist' element={renderWithLayout(ProductList)} />
          <Route
            path='/productlist/detail/:id'
            element={renderWithLayout(ProductDetail)}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
