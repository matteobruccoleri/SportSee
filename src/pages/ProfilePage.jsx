import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/api';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import RadarChart from '../components/RadarChart';
import PieChart from '../components/PieChart';
import Nutrients from '../components/Nutrients';

import styled from 'styled-components';

const ProfilePage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [sessionsData, setSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  min-height: 780px;
  padding: 50px;
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
const UserName = styled.span`
color: #FF0000;
}
`;

const Dashboard = styled.div`
display: flex;
height: 100%;
gap: 25px;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;
`;

const ChartsRow = styled.div`
  display: flex;
  gap: 25px;
`;


  useEffect(() => {
    async function fetchAllData() {
      try {
        if (userId !== '12' && userId !== '18') {
          throw new Error('Utilisateur non trouvé');
        }

        const [user, activity, sessions, performance] = await Promise.all([
          apiService.getUserMainData(userId),
          apiService.getUserActivity(userId),
          apiService.getUserAverageSessions(userId),
          apiService.getUserPerformance(userId)
        ]);

        setUserData(user);
        setActivityData(activity);
        setSessionsData(sessions);
        setPerformanceData(performance);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des données');
        setLoading(false);
      }
    }

    fetchAllData();
  }, [userId]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;
  if (!userData) return <div>Aucune donnée disponible</div>;

  return (
    <ProfilContainer>
      <div>
        <h1>Bonjour <UserName>{userData.userInfos.firstName}</UserName></h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <Dashboard>
        <ChartsContainer>
          <BarChart data={activityData} />
          <ChartsRow>
            <LineChart data={sessionsData} />
            <RadarChart data={performanceData} />
            <PieChart score={userData.todayScore || userData.score} />
          </ChartsRow>
        </ChartsContainer>
        <Nutrients data={userData.keyData} />
      </Dashboard>
    </ProfilContainer>
  );
};

export default ProfilePage;