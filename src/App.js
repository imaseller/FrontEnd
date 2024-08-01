import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ManagerList from './components/Admin/ManagerList.js';
import Admin from './pages/Admin';
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
          <Route path='/signup' element={<Signup />} />
          <Route path='/findId' element={<FindId />} />
          <Route path='/findPassword' element={<FindPassword />} />
          <Route path='/admin/*' element={<Admin />}>
            <Route path='manager-list' element={<ManagerList />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
