import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import CreateNewQuize from '../CreateNewQuize/CreateNewQuize';

const OurUniverseRoutes = ({ handleQuizData }) => (
  <Routes>
    <Route path='/favorite' element={<Favorite />} />
    <Route path='/new' element={<CreateNewQuize handleQuizData={handleQuizData} />} />
  </Routes>
);

export default OurUniverseRoutes;
