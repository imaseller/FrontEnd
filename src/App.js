import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import List from './pages/List';
import Loading from './components/Loading.js'; // 로딩 애니메이션 컴포넌트

// Lazy load components
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
const Main = lazy(() => import('./pages/Main'));
const FindId = lazy(() => import('./pages/FindId'));
const FindPassword = lazy(() => import('./pages/FindPassword'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

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
        {/* Suspense로 로딩 애니메이션 지정 */}
        <Suspense fallback={<Loading />}>
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
              path='/admin/:id'
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
            <Route
              path='/productlist'
              element={renderWithLayout(ProductList)}
            />
            <Route
              path='/productlist/detail/:id'
              element={renderWithLayout(ProductDetail)}
            />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
