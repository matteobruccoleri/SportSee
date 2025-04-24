import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataService from '../services/dataService'; // Service unifié
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import CustomRadarChart from '../components/RadarChart';
import CustomPieChart from '../components/PieChart';
import Nutrients from '../components/Nutrients';
import styled from 'styled-components';

// Configuration du service avec la variable d'environnement
// Si la variable n'est pas définie, on utilise l'API réelle par défaut
const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true';
dataService.setUseMock(useMockData);


const ProfilePage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [sessionsData, setSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllData() {
      try {
        if (userId !== '12' && userId !== '18') {
          throw new Error('Utilisateur non trouvé');
        }

        const [user, activity, sessions, performance] = await Promise.all([
          dataService.getUserMainData(userId),
          dataService.getUserActivity(userId),
          dataService.getUserAverageSessions(userId),
          dataService.getUserPerformance(userId)
        ]);

        if (!user) {
          throw new Error('Données utilisateur non disponibles');
        }

        setUserData(user);
        setActivityData(activity);
        setSessionsData(sessions);
        setPerformanceData(performance);
        setLoading(false);
      } catch (err) {
        console.error('Erreur:', err);
        setError(`Erreur lors du chargement des données: ${err.message}`);
        setLoading(false);
      }
    }
    fetchAllData();
  }, [userId]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;
  if (!userData) return <div>Aucune donnée disponible</div>;

  // Récupère le score depuis todayScore ou score
  const scoreValue = userData.todayScore !== undefined ? userData.todayScore : userData.score;

  return (
    <ProfilContainer>
      <div>
        <h1>
          Bonjour <UserName>{userData.userInfos.firstName}</UserName>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <Dashboard>
        <ChartsContainer>
          <BarChart data={activityData} />
          <ChartsRow>
            <LineChart data={sessionsData} />
            <CustomRadarChart data={performanceData} />
            <CustomPieChart score={scoreValue} />
          </ChartsRow>
        </ChartsContainer>
        <Nutrients data={userData.keyData} />
      </Dashboard>
    </ProfilContainer>
  );
};

/* styled components */
const ProfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    padding: 50px;
    gap: 50px;
    @media (min-width: 1024px) {
      width: 100%;
    }
  `;
  const UserName = styled.span`
    color: #FF0000;
  `;
  const Dashboard = styled.div`
    display: flex;
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

export default ProfilePage;