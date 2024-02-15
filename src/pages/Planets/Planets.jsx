import React, { useCallback, useEffect, useState } from 'react';
import CardItem from '../../components/Card/Card';
import { PlanetsWrapper } from './styled';
import planetsApi from '../../api/services/planets';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = useCallback(async () => {
    const planetsResponse = await planetsApi.fetch();

    setPlanets(planetsResponse);
  }, []);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  return (
    <PlanetsWrapper>
     {planets.map((planet) => (
      <CardItem
        key={planet.id}
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
