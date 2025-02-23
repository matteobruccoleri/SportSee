import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import Header from './components/Header';
import SideBar from './components/SideBar';
import ProfilePage from './pages/ProfilePage';

const Main = styled.main`
  display: flex;
  overflow: hidden;
  height: 100%;
  min-height: 780px;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <SideBar />
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" />} />
          <Route path="/user/:userId" element={<ProfilePage />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;