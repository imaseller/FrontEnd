import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import BlockManagerList from './components/Admin/BlockManagerList';
import ManagerGroupList from './components/Admin/ManagerGroupList';
import ManagerList from './components/Admin/ManagerList';
import MenuList from './components/Admin/MenuList';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
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
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/findId' element={<FindId />} />
          <Route path='/findPassword' element={<FindPassword />} />
          <Route path='/admin/*' element={<Admin />}>
            <Route path='managerlist' element={<ManagerList />} />
            <Route path='blockmanagerlist' element={<BlockManagerList />} />
            <Route path='managergrouplist' element={<ManagerGroupList />} />
            <Route path='menulist' element={<MenuList />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
