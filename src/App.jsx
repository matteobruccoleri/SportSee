import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import RadarChart from './components/RadarChart';
import PieChart from './components/PieChart';


const Main = styled.main`
  display: flex;
  overflow: hidden;
  height: 100%;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
`;

function App() {

  return (
    <>
      <Header/>
      <Main>
        <SideBar/>
        <FlexColumn>
          <BarChart/>
          <Flex>
            <LineChart/>
            <RadarChart/>
            <PieChart/>
          </Flex>
        </FlexColumn>
      </Main>

    </>
  )
}

export default App;
