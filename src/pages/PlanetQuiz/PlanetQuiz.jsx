// import React, { useCallback, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Loader from '../../components/Loader/Loader';
// import planetApi from '../../api/services/planet';
// import { Quiz } from '../../../constans';

// const PlanetQuiz = () => {
//   const { planetId } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [planet, setPlanet] = useState();

//   const fetchPlanet = useCallback(async () => {
//     try {
//       const planetResponse = await planetApi.fetch(planetId);

//       setPlanet(planetResponse);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }, [planetId]);

//   useEffect(() => {
//     fetchPlanet();
//   }, [fetchPlanet]);

//   if (loading) return <Loader />;

//   return (
//     <div>
//       {planet?.planet}
//     </div>
//   );
// };

// export default PlanetQuiz;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { Quiz } from '../../components/QuizComponent/QuizData'; // Імпортуйте дані з QuizData
import QuizComponent from '../../components/QuizComponent/QuizComponent';

const PlanetQuiz = () => {
  const { planetId } = useParams();
  const [loading, setLoading] = useState(true);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    // Знайдіть потрібну планету у масиві Quiz за planetId
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
