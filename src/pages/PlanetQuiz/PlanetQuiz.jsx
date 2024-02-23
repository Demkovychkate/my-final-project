import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { Quiz } from '../../components/QuizComponent/QuizData';
import QuizComponent from '../../components/QuizComponent/QuizComponent';

const PlanetQuiz = () => {
  const { planetId } = useParams();
  const [loading, setLoading] = useState(true);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const selectedPlanet = Quiz.find((item) => item.planet === planetId);
    setPlanet(selectedPlanet);
    setLoading(false);
  }, [planetId]);

  if (loading) return <Loader />;

  return (
    <div>
      {planet ? <QuizComponent planet={planet} /> : <div>Planet not found</div>}
    </div>
  );
};

export default PlanetQuiz;
