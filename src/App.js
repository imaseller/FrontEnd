import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import lazyLoad from './pages/lazyLode.js';
import Loading from './components/Loading';
import ContemporarySettings from './components/inventory/ContemporarySettings.js';

import Schedule from './pages/Schedule';

const List = lazyLoad(() => import('./pages/List'));
const DetailLayout = lazyLoad(() => import('./components/DetailLayout'));
const Inventory = lazyLoad(() => import('./pages/Inventory'));
const PaymentDetail = lazyLoad(() => import('./pages/PaymentDetail'));
const Menu = lazyLoad(() => import('./pages/menu.js'));
const Store = lazyLoad(() => import('./pages/Store'));
const ManagerList = lazyLoad(() => import('./components/Admin/ManagerList'));
const BlockManagerList = lazyLoad(() =>
  import('./components/Admin/BlockManagerList')
);
const ManagerDetail = lazyLoad(() =>
  import('./components/Admin/ManagerDetail')
);
const MemberList = lazyLoad(() => import('./components/Member/MemberList'));
const BlockMemberList = lazyLoad(() =>
  import('./components/Member/BlockMemberList')
);
const ReviewList = lazyLoad(() => import('./components/Member/ReviewList'));
const ReviewDetail = lazyLoad(() => import('./components/Member/ReviewDetail'));
const MemberDetail = lazyLoad(() => import('./components/Member/MemberDetail'));
const ProductList = lazyLoad(() => import('./components/Service/ProductList'));
const ProductDetail = lazyLoad(() =>
  import('./components/Service/ProductDetail')
);
const AdminLogin = lazyLoad(() => import('./pages/AdminLogin'));
const Home = lazyLoad(() => import('./pages/Home'));
const FindId = lazyLoad(() => import('./pages/FindId'));
const FindPassword = lazyLoad(() => import('./pages/FindPassword'));
const Login = lazyLoad(() => import('./pages/Login'));
const Signup = lazyLoad(() => import('./pages/Signup'));
const Analysis = lazyLoad(() => import('./pages/Analysis'));
const Settlement = lazyLoad(() => import('./pages/Settlement'));
const Delivery = lazyLoad(() => import('./pages/Delivery'));
const HomeDetail = lazyLoad(() => import('./pages/HomeDetail'));

function App() {
  const renderWithLayout = (Component) => (
    <Suspense fallback={<Loading />}>
      <List>
        <Component />
      </List>
    </Suspense>
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
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/home' element={<Home />} />
              <Route path='/inventory' element={<Inventory />} />
              <Route path='/payment' element={<PaymentDetail />} />
              <Route path='/store' element={<Store />} />
              <Route path='/menu' element={<Menu />} />

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

            <Route
              path='/inventory/settings'
              element={<ContemporarySettings />}
            />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
