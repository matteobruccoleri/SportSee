import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import RadarChart from './components/RadarChart';
import PieChart from './components/PieChart';
import Nutrients from './components/Nutrients';

const Main = styled.main`
  display: flex;
  overflow: hidden;
  height: 100%;
`;

const StatistiqueWrapper = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  padding: 50px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  gap: 25px;
`;

function App() {

  return (
    <>
      <Header/>
      <Main>
        <SideBar/>
        <StatistiqueWrapper>
          <FlexColumn>
            <BarChart/>
            <Flex>
              <LineChart/>
              <RadarChart/>
              <PieChart/>
            </Flex>
          </FlexColumn>
          <Nutrients/>
        </StatistiqueWrapper>
      </Main>

    </>
  )
}

export default App;
