import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { CircularProgress } from '@mui/material';
import CardItem from '../../components/Card/Card';
import { PlanetsWrapper } from './styled';
import planetsApi from '../../api/services/planets';

const Planets = ({ searchValue }) => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = useCallback(async () => {
    try {
      const planetsResponse = await planetsApi.fetch();

      setPlanets(planetsResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  const filteredPlanets = useMemo(() => planets.filter((planet) => planet.planet.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1), [planets, searchValue]);
  if (loading) return <CircularProgress />;
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
