import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import planetApi from '../../api/services/planet';

const PlanetQuiz = () => {
  const { planetId } = useParams();
  const [loading, setLoading] = useState(true);
  const [planet, setPlanet] = useState();

  const fetchPlanet = useCallback(async () => {
    try {
      const planetResponse = await planetApi.fetch(planetId);

      setPlanet(planetResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [planetId]);

  useEffect(() => {
    fetchPlanet();
  }, [fetchPlanet]);

  if (loading) return <Loader />;

  return (
    <div>
      {planet?.planet}
    </div>
  );
};

export default PlanetQuiz;
