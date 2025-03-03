import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import realApiService from '../services/api'; // Service API réel
import mockApiService from '../services/mockApiService'; // Service mockée
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import CustomRadarChart from '../components/RadarChart';
import CustomPieChart from '../components/PieChart';
import Nutrients from '../components/Nutrients';
import styled from 'styled-components';

// Utilisez cette constante pour choisir le service à utiliser
const USE_MOCK_DATA = false;
// Sélectionnez le service approprié en fonction de USE_MOCK_DATA
const dataService = USE_MOCK_DATA ? mockApiService : realApiService;

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

  // Récupère le score depuis todayScore ou score selon ce qui est disponible
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

export default ProfilePage;