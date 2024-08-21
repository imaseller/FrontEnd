import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import List from './pages/List';
import Loading from './components/Loading.js';
import DetailLayout from './components/DetailLayout';
import Monitoring from './pages/Monitoring';
import PaymentDetail from './pages/PaymentDetail';
import Store from './pages/Store';

const ManagerList = lazy(() => import('./components/Admin/ManagerList'));
const BlockManagerList = lazy(() =>
  import('./components/Admin/BlockManagerList')
);
const ManagerDetail = lazy(() => import('./components/Admin/ManagerDetail'));
const MemberList = lazy(() => import('./components/Member/MemberList'));
const BlockMemberList = lazy(() =>
  import('./components/Member/BlockMemberList')
);
const ReviewList = lazy(() => import('./components/Member/ReviewList'));
const ReviewDetail = lazy(() => import('./components/Member/ReviewDetail'));
const MemberDetail = lazy(() => import('./components/Member/MemberDetail'));
const ProductList = lazy(() => import('./components/Service/ProductList'));
const ProductDetail = lazy(() => import('./components/Service/ProductDetail'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const Home = lazy(() => import('./pages/Home'));
const FindId = lazy(() => import('./pages/FindId'));
const FindPassword = lazy(() => import('./pages/FindPassword'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

import Analysis from './pages/Analysis';
import Settlement from './pages/Settlement';
import Delivery from './pages/Delivery';
import HomeDetail from './pages/HomeDetail';

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
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/admin/auth/login' element={<AdminLogin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/findId' element={<FindId />} />
            <Route path='/findPassword' element={<FindPassword />} />

            {/* Pages wrapped with DetailLayout */}
            <Route element={<DetailLayout />}>
              <Route path='/home' element={<Home />} />
              <Route path='/monitoring' element={<Monitoring />} />
              <Route path='/payment' element={<PaymentDetail />} />
              <Route path='/store' element={<Store />} />

              {/* New Routes for Analysis, Settlement, and Delivery */}
              <Route path='/analysis' element={<Analysis />} />
              <Route path='/settlement' element={<Settlement />} />
              <Route path='/delivery' element={<Delivery />} />
            </Route>

            {/* Manager Routes */}
            <Route path='/admin' element={renderWithLayout(ManagerList)} />
            <Route
              path='/admin/:id'
              element={renderWithLayout(ManagerDetail)}
            />
            <Route
              path='/blockmanagerlist'
              element={renderWithLayout(BlockManagerList)}
            />

            {/* Member Routes */}
            <Route path='/user' element={renderWithLayout(MemberList)} />
            <Route
              path='/user/detail/:seq'
              element={renderWithLayout(MemberDetail)}
            />
            <Route
              path='/user/blocked'
              element={renderWithLayout(BlockMemberList)}
            />
            <Route path='/reviewlist' element={renderWithLayout(ReviewList)} />
            <Route
              path='/reviewlist/detail/:no'
              element={renderWithLayout(ReviewDetail)}
            />

            {/* Product Routes */}
            <Route
              path='/productlist'
              element={renderWithLayout(ProductList)}
            />
            <Route
              path='/productlist/detail/:id'
              element={renderWithLayout(ProductDetail)}
            />

            {/* New Route for HomeDetail */}
            <Route path='/item/:id' element={<HomeDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
