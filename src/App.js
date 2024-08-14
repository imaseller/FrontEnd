import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
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
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

function App() {
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
          <Route
            path='/managerlist'
            element={
              <List>
                <ManagerList />
              </List>
            }
          />
          <Route
            path='/managerlist/detail/:id'
            element={
              <List>
                <ManagerDetail />
              </List>
            }
          />
          <Route
            path='/blockmanagerlist'
            element={
              <List>
                <BlockManagerList />
              </List>
            }
          />
          <Route
            path='/memberlist'
            element={
              <List>
                <MemberList />
              </List>
            }
          />
          <Route
            path='/memberlist/detail/:seq'
            element={
              <List>
                <MemberDetail />
              </List>
            }
          />
          <Route
            path='/blockmemberlist'
            element={
              <List>
                <BlockMemberList />
              </List>
            }
          />
          <Route
            path='/reviewlist'
            element={
              <List>
                <ReviewList />
              </List>
            }
          />
          <Route
            path='/reviewlist/detail/:no'
            element={
              <List>
                <ReviewDetail />
              </List>
            }
          />
          <Route
            path='/productlist'
            element={
              <List>
                <ProductList />
              </List>
            }
          />
          <Route
            path='/productlist/detail/:id'
            element={
              <List>
                <ProductDetail />
              </List>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
