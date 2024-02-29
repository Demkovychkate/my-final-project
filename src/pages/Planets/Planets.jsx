import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import CardItem from '../../components/Card/Card';
import { PlanetsWrapper } from './styled';
import planetsApi from '../../api/services/planets';
import Loader from '../../components/Loader/Loader';
import Toast from '../../components/Toast/Toast';

const Planets = ({ searchValue }) => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState(null);

  const fetchPlanets = useCallback(async () => {
    try {
      const planetsResponse = await planetsApi.fetch();
      setPlanets(planetsResponse);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  const filteredPlanets = useMemo(() => planets.filter((planet) => planet.planet.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1), [planets, searchValue]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (filteredPlanets.length === 0) {
    return <Toast message="Information not faund" />;
  }
  return (
    <PlanetsWrapper>
      {filteredPlanets.map((planet) => (
        <CardItem
          key={planet.id}
          id={planet.id}
          planet={planet.planet}
          image={planet.image}
          title={planet.title}
          description={planet.description}
          />
      ))}
    </PlanetsWrapper>
  );
};

export default Planets;
