import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import CreateNewQuize from '../CreateNewQuize/CreateNewQuize';

const OurUniverseRoutes = () => {
  <Routes>
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/new' element={<CreateNewQuize />} />
  </Routes>;
};

export default OurUniverseRoutes;
