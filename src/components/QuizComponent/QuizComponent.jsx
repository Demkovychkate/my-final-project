// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import QuizQuestion from './QuizQuestion';
// import Timer from './Timer';
// import ScorePage from './ScorePage';
// import QuizStartPage from './QuizStartPage';
// import { QuizContainer, Header, Question } from './styled';
// import planetApi from '../../api/services/planet';

// const QuizComponent = ({ planet }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(180);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [timerFinished, setTimerFinished] = useState(false);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime === 0 || quizCompleted) {
//           setTimerFinished(true);
//           clearTimeout(timer);
//           return prevTime;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     if (currentQuestionIndex === planet.questions.length) {
//       setQuizCompleted(true);
//     }

//     return () => clearTimeout(timer);
//   }, [timeLeft, currentQuestionIndex, planet.questions.length, quizCompleted]);

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   const handleStartQuiz = () => {
//     setQuizStarted(true);
//   };

//   const handleRestart = () => {
//     setCurrentQuestionIndex(0);
//     setTimeLeft(180);
//     setScore(0);
//     setQuizCompleted(false);
//     setTimerFinished(false);
//   };

//   const handleClose = () => {
//     setQuizCompleted(false);
//   };

//   const handleAddToFavorites = async () => {
//     try {
//       console.log('Adding to favorites...');
//       const favoritePlanets = await planetApi.getFavorites();
//       console.log('Favorite planets:', favoritePlanets);
//       if (favoritePlanets.find((item) => item.id === planet.id)) {
//         console.log('Planet is already in favorites');
//         throw new Error('Planet is already in favorites');
//       }
//       await planetApi.addToFavorites(planet);
//       console.log('Added to favorites:', planet);
//     } catch (error) {
//       console.error(error);
//       return;
//     }
//     console.log('Navigation to favorite page...');
//     navigate('ouruniverse/favorite');
//   };

//   const renderQuestion = () => {
//     if (quizCompleted) {
//       return (
//         <ScorePage
//           score={score}
//           totalQuestions={planet.questions.length}
//           onRestart={handleRestart}
//           onClose={handleClose}
//           addToFavorites={handleAddToFavorites}
//         />
//       );
//     } if (currentQuestionIndex < planet.questions.length) {
//       const question = planet.questions[currentQuestionIndex];
//       return <QuizQuestion question={question} onAnswer={handleAnswer} />;
//     }
//   };

//   return (
//     <>
//       {quizStarted ? (
//         <QuizContainer>
//           <Header>
//             <Timer timeLeft={timeLeft} timerFinished={timerFinished} />
//           </Header>
//           <Question>{renderQuestion()}</Question>
//           </QuizContainer>
//       ) : (
//         <QuizStartPage planet={planet} onStartQuiz={handleStartQuiz} />
//       )}
//     </>
//   );
// };

// export default QuizComponent;
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizQuestion from './QuizQuestion';
import Timer from './Timer';
import ScorePage from './ScorePage';
import QuizStartPage from './QuizStartPage';
import { QuizContainer, Header, Question } from './styled';
import planetsApi from '../../api/services/planets';

const QuizComponent = ({ planet }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const navigate = useNavigate(); // Підключаємо функцію навігації

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0 || quizCompleted) {
          setTimerFinished(true);
          clearTimeout(timer);
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    if (currentQuestionIndex === planet.questions.length) {
      setQuizCompleted(true);
    }

    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestionIndex, planet.questions.length, quizCompleted]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setTimeLeft(180);
    setScore(0);
    setQuizCompleted(false);
    setTimerFinished(false);
  };

  const handleClose = () => {
    setQuizCompleted(false);
  };
  const handleAddToFavorites = async () => {
    try {
      const favoritePlanets = await planetsApi.getFavorites();
      const isPlanetInFavorites = favoritePlanets.some((item) => item.id === planet.id);
      if (isPlanetInFavorites) {
        throw new Error('Planet is already in favorites');
      }
      await planetsApi.addToFavorites(planet);
      navigate('/ouruniverse/favorite');
    } catch (error) {
      console.error(error);
    }
  };
  const renderQuestion = () => {
    if (quizCompleted) {
      return (
        <ScorePage
          score={score}
          totalQuestions={planet.questions.length}
          onRestart={handleRestart}
          onClose={handleClose}
          addToFavorites={handleAddToFavorites}
        />
      );
    } if (currentQuestionIndex < planet.questions.length) {
      const question = planet.questions[currentQuestionIndex];
      return <QuizQuestion question={question} onAnswer={handleAnswer} />;
    }
  };

  return (
    <>
      {quizStarted ? (
        <QuizContainer>
          <Header>
            <Timer timeLeft={timeLeft} timerFinished={timerFinished} />
          </Header>
          <Question>{renderQuestion()}</Question>
          </QuizContainer>
      ) : (
        <QuizStartPage planet={planet} onStartQuiz={handleStartQuiz} />
      )}
    </>
  );
};

export default QuizComponent;
