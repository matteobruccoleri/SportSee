import styled from "styled-components";

import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';


const Main = styled.main`
  display: flex;
  overflow: hidden;
  height: 100%;
`;

function App() {

  return (
    <>
      <Header/>
      <Main>
        <SideBar/>
      </Main>

    </>
  )
}

export default App
